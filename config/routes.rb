Rails.application.routes.draw do
  namespace :api do
  get 'followings/create'
  end

  namespace :api do
  get 'followings/destroy'
  end

  root 'static_pages#home'
  get '/static_pages/front', to: 'static_pages#front'

  resources :users, only: [:new, :create, :show, :update, :edit]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :global_searches, only: [:index]
    resources :tags, only: [:show]
    resources :user_taggings, only: [:create, :destroy]
    resources :followings, only: [:create, :destroy]
    resources :recommendations, only: [:create, :destroy]
    resources :stories, only: [:new]
    resources :users, only: [:new] do
      resources :stories, only: [:create, :show, :index] do
        resources :tags, only: [:create, :index]
      end
    end
  end

end
