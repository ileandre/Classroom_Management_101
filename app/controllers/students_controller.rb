class StudentsController < ApplicationController
  before_action :authorize_request
  before_action :set_student, only: [:show, :update, :destroy]

  # GET /students
  def index
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
    @student.user_id = @current_user.id
    if @student.save
      render json: @student, status: :created
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end

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
    def set_student
      @students = Student.where(user_id: @current_user.id)
      @student = @students.find(params[:id])
    end

    def student_params
      params.require(:student).permit(:user_id, :firstName, :lastName, :grade, :period)
    end
end
