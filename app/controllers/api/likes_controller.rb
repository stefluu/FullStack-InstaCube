class Api::LikesController < ApplicationController

  # before_action :require_login

  def index
    @likes = Like.all
  end

  def create
    @like = Like.new(like_params)
    # @like.img_id = params[:img_id]
    @like.user_id = current_user.id

    unless @like.save!
      flash[:errors] = @like.errors.full_messages
    end
    render 'api/likes/show'

  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render :destroy
  end

  private
  def like_params
    params.require(:like).permit(:user_id, :img_id, :id)
  end

end
