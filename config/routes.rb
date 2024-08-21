Rails.application.routes.draw do
  devise_for :users
  resources :posts
  post 'links', to: 'links#create'
  get 'dashbaord', to: 'links#index'
  # get 'data', to: 'links#index'

  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  root "dashboard#index"
end
