class CommentsController < ApplicationController
  before_action :authorize_request, only: [:show, :create, :destroy]
  before_action :set_comment, only: [:show, :update, :destroy]

  # GET /comments
  def index
     @comments = Comment.all
    render json: @comments
  end

  # GET /comments/1
  def show
    render json: @studentComments
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    def set_comment
      @student = Student.find(params[:id])
      @studentComments = Comment.where(student_id: @student.id)
    end

    def comment_params 
    params.require(:comment).permit(:student_id, :comment)
    end
end