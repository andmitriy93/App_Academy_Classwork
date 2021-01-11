Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:new, :create]
  resources :subs
  resource :session, only: [:new, :create, :destroy]
  resources :posts, only: [:show, :new, :create, :edit, :update, :destroy]
end
