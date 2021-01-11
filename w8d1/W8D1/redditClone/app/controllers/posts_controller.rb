class PostsController < ApplicationController

  def show
    @post = Post.find_by(id: params[:id])
    render :new 
  end

  def new
    @post = Post.new
    render :new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to post_url(@post)
    else
      # flash.now[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def edit
    @post = Post.find_by(id: params[:id])
    render :edit
  end

  def update
    @post = Post.find_by(id: params[:id])
    @post.update(post_params)
    if @post.save
      redirect_to post_url(@post)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :edit
  end



  private
  def post_params
    params.require(:post).permit(:title, :url, :content, :sub_ids)
  end
end
