class Api::ImagesController < ApplicationController

  before_action :require_login

  def create
    @image = Image.new(image_params)
    @image.save!
  end

  def index
    @images = Image.all
    render :index
  end

  def show
    @image = Image.find(params[:id])
    render :show
  end

  private
  def image_params
    params.require(:image).permit(:user_id, :date, :caption)
  end
end
