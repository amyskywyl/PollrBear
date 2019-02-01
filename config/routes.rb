Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :groups, only: [:create, :destroy, :index, :update]
    resources :questions, only: [:show, :create, :index, :update, :destroy]
    resources :choices, only: [:create, :destroy, :index, :show, :update]
  end
  root to: "static_pages#root"
end
