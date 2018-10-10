class Api::ImagesController < ApplicationController

  before_action :require_login

  def index
    @images = Image.all
    @image.user_id = params[:id]
  end

  def show
    @image = Image.find(params[:id])
  end
end
