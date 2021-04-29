class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  # POST /users
  def create
    print "hello"
    @user = User.new(user_params)

    if @user.save
      @token = encode({id: @user.id})  #encode the users id
      render json: {    #we want to sent the user and their token back
        user: @user.attributes.except('password_digest', 'created_at', 'updated_at'),   #this returns the attributes of the user except the password_digest
        token: @token
      },  status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:firstName, :lastName, :username, :email, :password)
    end
end
