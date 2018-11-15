class Api::FollowingsController < ApplicationController

  before_action :require_login

  def index
    @followings = Follow.all
  end

  def create
    @following = Following.new(following_params)
    @following.user_id = current_user.id
    # @following.follower_id = params[:id]

    unless @following.save!
      flash[:errors] = @following.errors.full_messages
    end

    render 'api/users/show'
  end

  def destroy
    @following = Follow.find(params[:id])
    @following.destroy
    render 'api/users/show'
  end

  private
  def following_params
    params.require(:following).permit(:follower_id)
  end

end
