class Api::StoriesController < ApplicationController

  def index
    author_id = params[:author_id].to_i
    @stories = Story.where(author_id: author_id).reverse
  end

  def show

    story_id = params[:id]
    @story = Story.find(story_id)
  end

  def create
    @story = Story.new(story_params)
    @story.author_id = params[:user_id]
    @story.banner_image_url = params[:story][:bannerImageUrl]

    if (params[:story][:tags] != nil )
      tags = Tag.handleTagsCreation(params)
      @story.tags = tags
    end

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
