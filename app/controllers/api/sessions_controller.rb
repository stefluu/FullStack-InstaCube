class Api::SessionsController < ApplicationController
  def new
    @user = User.new
    render: new

  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      render 'api/images/index'
    else
      flash[:errors] = ["Invalid login credentials"], status: 401
      render json: 'api/session/new'
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render 'api/session/new'
    else
      render json: ["No user logged in"], status: 404
    end
  end
end
