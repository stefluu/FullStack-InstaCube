class Api::SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login!(@user)
      render 'api/sessions/current_user'
      #rendering this json.jbuilder, which has access to currentUser payload
    else
      # render json @user.errors.full_messages, status: 401
      render json: ["Invalid login credentials"], status: 401
      # render json: 'api/session/create'
    end
  end

  def destroy
    # @user = current_user
    # if @user
    #   logout!
    #   render 'api/session/new'
    # else
    #   render json: ["No user logged in"], status: 404
    # end

    @user = current_user
    if @user
      logout!
      render json: [message: "success"]
      # render json: ["logged out!"], status: 418 #postman test
      # render 'api/session'
    else
      # render json @user.errors.full_messages, status: 404
      # render json: ["No user logged in"], status: 404
      # render 'api/'

      render json: [message: "default to splash"]
      #instagram defaults to splash page when not logged in
    end
  end
end
