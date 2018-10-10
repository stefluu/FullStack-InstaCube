class Api::LikesController < ApplicationController

  before_action :require_login

  def create
    @like = Like.new
    @like.img_id = params[:img_id]
    @like.user_id = current_user.id

    unless @like.save!
      flash[:errors] = @like.errors.full_messages
    end
    render 'api/images/show'
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render 'api/images/show'
  end
end
