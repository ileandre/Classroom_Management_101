class CommentsController < ApplicationController
  before_action :authorize_request, only: [:show, :create, :destroy]
  before_action :set_comment, only: [:show, :update, :destroy]

  # GET /comments
  def index
    # @user = User.find(params[:user_id])
    #  @students = Student.find(user_id: current_user.id)
    #  @students = Student.where(user_id: @user.id)

     # @students = current_user.students
    #  @student = @students.find(params[:student_id])
    #  @comments = Comment.where(student_id: @student.id)
     # #OR
     # @comments = @student.comments
     @comments = Comment.all
    render json: @comments
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)
    # @comment.student_id = params[:student_id]

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
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @user = User.find(params[:user_id])
      # @students = Student.find(user_id: current_user.id)
      @students = Student.where(user_id: @user.id)

      # @students = current_user.students
      @student = @students.find(params[:student_id])
      @comments = Comment.where(student_id: @student.id)
      # #OR
      # @comments = @student.comments
      @comment = @comments.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:student_id, :comment)
    end
end
