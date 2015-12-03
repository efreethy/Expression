class UsersController < ApplicationController


  def new
  end

  def update
    if (!signed_in?)
      render json: {error: "Unauthorized User Update"}, status: 403
    end

    @user = User.find(params[:user][:currentUserId])
    @user.prof_image_url = params[:user][:profImageUrl]

    if @user.save
      render :show
    else
      render json: { errors: @user.errors.full_messages}, status: 422
    end
  end

  def create
    @user = User.new(user_params)
    @user.prof_image_url = "http://res.cloudinary.com/efreezy/image/upload/v1445638630/green-fractal_ttu1dh.jpg"
    @user.all_followings = [User.find_by_username("Evan Freethy")]
    if @user.save
      sign_in(@user)
      redirect_to root_path
    else
      flash.now[:base] = @user.errors.full_messages
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :password, :profImageUrl)
  end
end
