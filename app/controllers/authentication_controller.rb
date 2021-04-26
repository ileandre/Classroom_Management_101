class AuthenticationController < ApplicationController
before_action :authorize_request, only: :verify

    #POST /auth/login
    def login
        @teacher = Teacher.find_by(username: login_params[:username])   #find the teacher based on their username
        if @teacher.authenticate(login_params[:password])      #authenticate method provided by Bcrypt and 'has_secure_password'
            token = encode({id: @teacher.id})
            render json: {
                teacher: @teacher.atrributes.except('password_digest', 'created_at', 'updated_at'),
                token: token
            }, status: :ok
        else
            render json: {errors: "unauthorized"}, status: :unauthorized    #NOTE: Be as vague as possible whe ncreating error messges related to authorization
        end
    end

    def verify
        render json: @current_teacher,sttribute.except('password_digest', 'created_at', 'updated_at')       #verify is great for page refreshes so you don't always have to log back in
    end

    def login_params
        params.require(:authentication).permit(:username, :password)
    end
end
