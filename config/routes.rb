Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show, :edit, :update]
    resource :session, only: [:new, :create, :destroy]
    resources :images, only: [:create, :index, :show] do
      resources :comments, only: [:create, :destroy]
    end
    resources :likes, only: [:index, :create, :destroy]
    resources :followings, only: [:create, :destroy]
    # resources :likes, only: [:index, :create, :destroy]
  end
end
