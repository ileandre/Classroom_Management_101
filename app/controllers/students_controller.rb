class StudentsController < ApplicationController
  # before_action :authorize_request
  before_action :set_student, only: [:show, :update, :destroy]

  # GET /students
  def index
    @teacher = Teacher.find(params[:teacher_id])
    @students = Student.where(teacher_id: @teacher.id)
    render json: @students
  end

  # GET /students/1
  def show
    render json: @student
  end

  # POST /students
  def create
    @student = Student.new(student_params)
    @student.teacher_id = params[:teacher_id]
    # @student.teacher_id = @current_teacher.id   #saves the teacher as the students teacher
    # @student.teacher_id = @current_teacher    #saves the teacher as the students teacher

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
    # Use callbacks to share common setup or constraints between actions.
    def set_student
      @teacher = Teacher.find(params[:teacher_id])
      @students = Student.where(teacher_id: @teacher.id)
      # @students = Student.where(teacher_id: current_teacher.id)
      @student = @students.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def student_params
      params.require(:student).permit(:teacher_id, :first_name, :last_name, :grade, :period)
    end
end
