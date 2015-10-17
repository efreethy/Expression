Rails.application.routes.draw do
  root 'static_pages#home'

  resources :users, only: [:new, :create, :show, :update, :edit]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :tags, only: [:show]
    resources :stories, only: [:new]
    resources :users, only: [:new] do
      resources :stories, only: [:create, :show, :index] do
        resources :tags, only: [:create, :index]
      end
    end
  end

end
