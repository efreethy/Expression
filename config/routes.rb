Rails.application.routes.draw do
  root 'static_pages#home'

  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
end
