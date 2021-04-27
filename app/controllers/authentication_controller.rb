class AuthenticationController < ApplicationController
before_action :authorize_request, only: :verify

    #POST /auth/login
    def login
        @user = User.find_by(username: login_params[:username])   #find the user based on their username
        if @user.authenticate(login_params[:password])      #authenticate method provided by Bcrypt and 'has_secure_password'
            token = encode({id: @user.id})
            render json: {
                user: @user.atrributes.except('password_digest', 'password_confirmation', 'created_at', 'updated_at'),
                token: token
            }, status: :ok
        else
            render json: {errors: "unauthorized"}, status: :unauthorized    #NOTE: Be as vague as possible whe ncreating error messges related to authorization
        end
    end

    def verify
        render json: @current_user,sttribute.except('password_digest', 'password_confirmation', 'created_at', 'updated_at')       #verify is great for page refreshes so you don't always have to log back in
    end

    private

    def login_params
        params.require(:authentication).permit(:username, :password)
    end
end
