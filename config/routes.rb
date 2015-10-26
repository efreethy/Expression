Rails.application.routes.draw do
  namespace :api do
  get 'followings/create'
  end

  namespace :api do
  get 'followings/destroy'
  end

  root 'pages#home'
  get '/pages/front', to: 'pages#front'
  get '/pages/home', to: 'pages#home'

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
