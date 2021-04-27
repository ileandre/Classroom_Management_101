class StudentsController < ApplicationController
  before_action :authorize_request
  before_action :set_student, only: [:show, :update, :destroy]

  # GET /students
  def index
    # @user = User.find(params[:user_id])
    # @students = Student.where(user_id: @user.id)
    @students = Student.where(user_id: @current_user.id)
    render json: @students
  end

  # GET /students/1
  def show
    render json: @student, include: :comments, status: :ok
  end

  # POST /students
  def create
    @student = Student.new(student_params)
    # @student.user_id = params[:user_id]
    @student.user_id = @current_user.id   #saves the user as the students user

    if @student.save
      render json: @student, status: :created
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end

  # #POST comment /students/:id
  # def add_comment
  #   @student = Student.find(parama[:id])
  #   @comments = 
  # end

  # PATCH/PUT /students/1
  def update
    if @student.update(student_params)
      render json: @student
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end

  # DELETE /students/1
  def destroy
    @student.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_student
      # @user = User.find(params[:user_id])
      # @students = Student.where(user_id: @user.id)
      @students = Student.where(user_id: current_user.id)
      @student = @students.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def student_params
      params.require(:student).permit(:user_id, :firstName, :lastName, :grade, :period)
    end
end
