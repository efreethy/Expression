class Api::RecommendationsController < ApplicationController

  def create
    @recommendation = Recommendation.new(recommendation_params)
    @story = Story.find(params[:story_id])
    if @recommendation.save
      render :create_destroy
    else
      render json: @recommendation.errors.full_messages, status: 404
    end
  end

  def destroy
    @recommendation = Recommendation.where(story_id: params[:story_id], user_id: params[:user_id])
    @story = Story.find(params[:story_id])
    if @recommendation[0].destroy
      render :create_destroy
    else
      render json: @recommendation.errors.full_messages, status: 404
    end
  end

  def recommendation_params
    params.permit(:user_id, :story_id)
  end
end
