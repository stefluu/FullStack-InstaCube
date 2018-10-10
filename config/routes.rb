Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  Rails.application.routes.draw do
    namespace :api, default: { format: JSON } do
      resources :users, only: [:create, :show, :edit, :update]
      resource :session, only: [:new, :create, :destroy]
      resources :images, only: [:index, :show]
      resources :likes, only: [:create, :destroy]
      resources :comments, only: [:create, :destroy]
      resources :followings, only: [:create, :destroy]
    end
  end

  root "static_pages#root"
end
