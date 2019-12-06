class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    if @user = User.find_by_email(params[:email])
      if @user.authenticate(params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
        token = encode(user_id: @user.id, email: @user.email)
        render json: { user: @user, token: token }, status: :ok
      else
        render json: { error: 'unauthorized' }, status: :unauthorized
      end
    else render json: { error: 'invalid email' }, status: :unauthorized
    end 
 
  end
  
  # GET /auth/verify
  def verify
    render json: @current_user, status: :ok
  end


  private

  def login_params
    params.permit(:first_name, :password, :email)
  end
end
