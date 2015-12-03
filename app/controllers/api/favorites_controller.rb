class Api::FavoritesController < ApplicationController

  def index
    @stories = User.find(params[:user][:user_id]).recommended_stories
    render :index
  end

  def user_params
    params.require(:user).permit(:user_id)
  end
end
