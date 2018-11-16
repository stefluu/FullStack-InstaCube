class Api::FollowingsController < ApplicationController

  before_action :require_login

  def index
    @followings = Following.all
  end

  def create
    @following = Following.new(following_params)
    @following.user_id = current_user.id
    # @following.follower_id = params[:id]

    unless @following.save!
      flash[:errors] = @following.errors.full_messages
    end

    render 'api/followings/show'
  end

  def destroy
    @following = Following.find(params[:id])
    @following.destroy
    render 'api/followings/show'
  end

  private
  def following_params
    params.require(:following).permit(:follower_id)
  end

end
