class Api::FollowingsController < ApplicationController
  def create
    @following = Following.new(user_id: params[:followed_id], follower_id: params[:follower_id])

    @user = User.find(params[:followed_id])

    if @following.save
      render :create
    else
      render json: @following.errors.full_messages, status: 404
    end
  end

  def destroy
    query_string = "user_id = #{params[:followed_id]} AND follower_id = #{params[:follower_id]}"
    @following = Following.where(query_string)
    @user = User.find(params[:followed_id])
    if @following.first.destroy
      render :destroy
    else
      render json: @following.errors.full_messages, status: 404
    end
  end

  def following_params
    params.permit(:follower_id, :followed_id)
  end
end
