class UsersController < ApplicationController
    def index
        user = User.all
        render json: user
    end
    
    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end
    
    def show #find and show the user by their id
        user = User.find_by(id: params[:id])
        render json: user
    end
    
    private
    
    def user_params
        params.require(:user).permit(:name, :email)
    end
end

