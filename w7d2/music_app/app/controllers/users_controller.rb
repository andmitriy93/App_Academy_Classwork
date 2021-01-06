class UsersController < ApplicationController

    def new
        @user = User.new
        render :new
    end

    def index
        @users = User.all 
        render :index
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)

        if @user.save
            redirect_to user_url(@user)
        else
            render :new
        end
    end
    


    private

    def user_params
        params.require(:user).permit(:email, :password, :session_token)
    end

end
