class UsersController < ApplicationController
  def new 
    @user = User.new 
    render :new
  end

  def create 
    #set session token and password_digest here
    # set session_token
    #set password_digest
    # create user with those params

    @user = User.new(user_params)
    if @user.save 
      login(@user)
      redirect_to user_url(@user)
    else
      render :new
    end
  end

  private 
  def user_params
    params.require(@user).permit(:username, :password)
  end
end
