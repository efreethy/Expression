class Api::StoriesController < ApplicationController

  def index
    author_id = params[:author_id].to_i
    @stories = Story.where(author_id: author_id)
    render json: @stories
  end

  def show
    story_id = params[:id]
  end

  def create
    @story = Story.new(story_params)
    @story.author_id = params[:user_id]
    if (current_user.id != params[:user_id].to_i )
      render json: {error: "Unauthorized Post Creation"}, status: 403
    end

    if @story.save
      render json: @story
    else
      render json: { errors: @story.errors.full_messages}, status: 422
    end
  end


  def story_params
    params.require(:story).permit(:title, :body)
  end
end
