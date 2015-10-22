class Api::StoriesController < ApplicationController

  def index
    if (params[:type] == "fetchTopStories")
      Story.includes(:user)
      @top_stories = Story.joins(:recommendations => :user)
                        .select("stories.*, count(*) AS count")
                        .group('stories.id').order('count DESC').limit(6)
      render :top_stories
    else
      author_id = params[:author_id].to_i
      @stories = Story.where(author_id: author_id).reverse
    end
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
    params.require(:story).permit(:title, :body, :type)
  end
end
