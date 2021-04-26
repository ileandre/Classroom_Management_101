class TeachersController < ApplicationController
  # before_action :set_teacher, only: [:destroy]
  before_action :set_teacher, only: [:show, :update, :destroy]

  # GET /teachers
  def index
    @teachers = Teacher.all
    render json: @teachers
  end

  # GET /teachers/1
  def show
    render json: @teacher
  end

  # POST /teachers
  def create
    @teacher = Teacher.new(teacher_params)

    if @teacher.save
      @token = encode({id: @teacher.id})  #encode the teachers id
      render json: {    #we want to sent the teacher and their token back
        teacher: @teacher.attributes.except('password_digest', 'created_at', 'updated_at'),   #this returns the attributes of the teacher except the password_digest
        token: @token
      },  status: :created
    else
      render json: @teacher.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /teachers/1
  def update
    if @teacher.update(teacher_params)
      render json: @teacher
    else
      render json: @teacher.errors, status: :unprocessable_entity
    end
  end

  # DELETE /teachers/1
  def destroy
    @teacher.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_teacher
      @teacher = Teacher.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def teacher_params
      params.require(:teacher).permit(:first_name, :last_name, :username, :email, :password, :quote)
    end
end
