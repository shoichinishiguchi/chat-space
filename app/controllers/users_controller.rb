class UsersController < ApplicationController

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def index
    @users = User.where('name LIKE(?)', "#{params[:keyword]}%").limit(20)
    respond_to do |format|
      format.html
      {
        notice: 'メッセージが送信されました'
        }
      format.json
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :keyword)
  end


end
