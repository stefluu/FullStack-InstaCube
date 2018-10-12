class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save!
      login!(@user)
      render 'api/sessions/current_user'
    else
      render json: @user.errors.full_messages, status: 422
      # render 'api/session/new'
    end

  end

  def show
    @user = User.find_by(username: params[:user][:username])
    render 'api/users/show'
  end

  def edit
    @user = current_user
  end

  def update
    @user = current_user
    if @user && @user.update_attributes(user_params)
      @user.save!
      render 'api/users/show'
    else
      require_login
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :full_name, :display_name, :bio, :password)
  end
end
