Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, default: { format: JSON } do
    resources :users, only: [:create, :show, :edit, :update]
    resource :session, only: [:new, :create, :destroy]
    resources :images, only: [:create, :index, :show] do
      resources :likes, only: [:create, :destroy]
      resources :comments, only: [:create, :destroy]
    end
    resources :followings, only: [:create, :destroy]
  end
end
