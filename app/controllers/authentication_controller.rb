class AuthenticationController < ApplicationController
before_action :authorize_request, only: :verify

    #POST /auth/login
    def login

        before_action :authorize_request, except: :login

        # POST /auth/login
        def login
          @user = User.find_by(username: login_params[:username])	
          if @user.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
            token = encode({id: @user.id})
            render json: {
              user: @user.atrributes.except('password_digest', 'created_at', 'updated_at'),
              token: token
              }, status: :ok
          else
            render json: { errors: 'unauthorized' }, status: :unauthorized
          end
        end
        
        # GET /auth/verify
        def verify
            render json: @current_user.attribute.except('password_digest', 'created_at', 'updated_at')       #verify is great for page refreshes so you don't always have to log back in
        end
      
      
        private
      
        def login_params
          params.require(:authentication).permit(:username, :password)
        end
      


        @user = User.find_by(username: login_params[:username])   
        if @user.authenticate(login_params[:password])     
            token = encode({id: @user.id})
            render json: {
                user: @user.atrributes.except('password_digest', 'created_at', 'updated_at'),
                token: token
            }, status: :ok
        else
            render json: {errors: "unauthorized"}, status: :unauthorized   
        end
    end

    def verify
        render json: @current_user,sttribute.except('password_digest', 'created_at', 'updated_at')       
    end

    private

    def login_params
        params.require(:authentication).permit(:username, :password)
    end
end
