class Api::GlobalSearchesController < ApplicationController
  def index
    @user_results = User.where(["LOWER(username) LIKE ?","%#{params[:query_text].downcase}%"]).order(:username).limit(3)
    @tag_results = Tag.where(["LOWER(name) LIKE ?","%#{params[:query_text].downcase}%"]).order(:name).limit(3)
    @story_results = Story.where(["LOWER(title) LIKE ?","%#{params[:query_text].downcase}%"]).order(:title).limit(3)

    render :index
  end
end
