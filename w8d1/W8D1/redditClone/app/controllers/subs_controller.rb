class SubsController < ApplicationController

  def index
    @subs = Sub.all
    render :index
  end

  def show
    @sub = Sub.find_by(id: params[:id])
    render :show
  end

  def new
    @sub = Sub.new
    render :new
  end

  def create
    @sub = Sub.new(sub_params)
    if @sub.save
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :new
    end
  end

  def edit
   require_moderator
   @sub = Sub.find_by(id: params[:id])
   render :edit
  end

  def update
    @sub = Sub.find_by(id: params[:id])
    @sub.update(sub_params)
    if @sub.save
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :edit
    end
  end

  private
  def sub_params
    params.require(:sub).permit(:title, :description)
  end 

  def require_moderator
    redirect_to subs_url unless current_user = User.find_by(id: self.moderator_id)
  end
end
