class Api::FollowingsController < ApplicationController

  before_action :require_login

  def create
    @following = Following.new
    @following.user_id = current_user.id
    @following.follower_id = params[:id]

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
end
