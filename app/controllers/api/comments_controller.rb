class Api::CommentsController < ApplicationController

  before_action :require_login

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.img_id = params[:img_id]

    unless @comment.save!
      flash[:errors] = @comment.errors.full_messages
    end

    render 'api/images/show'
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render 'api/images/show'
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end
end
