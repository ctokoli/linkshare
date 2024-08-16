Rails.application.routes.draw do
  post 'links', to: 'links#create'
  get 'link', to: 'links#index'
  # get 'data', to: 'links#index'

  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  root "dashboard#index"
end
