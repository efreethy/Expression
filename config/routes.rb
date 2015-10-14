Rails.application.routes.draw do
  root 'static_pages#home'

  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :stories, only: [:new]
    resources :users, only: [:new] do
      resources :stories, only: [:create, :show, :index]
    end
  end

end
