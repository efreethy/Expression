class Api::UserTaggingsController < ApplicationController
  def create
    @user_tagging = UserTagging.new(user_tagging_params)
    @user = User.find(params[:user_id])
    if @user_tagging.save
      render json: @user.tag_subscriptions
    else
      render json:@user_tagging.errors.full_messages, status: 404
    end
  end

  def destroy
    @user_tagging = UserTagging.find(params[:tag_id])
    @user = User.find(params[:user_id])
    if @user_tagging.destroy
      render json: @user.tag_subscriptions
    else
      render json:@user_tagging.errors.full_messages, status: 404
    end
  end

  def user_tagging_params
    params.permit(:user_id, :tag_id)
  end
end
