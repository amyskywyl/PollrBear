Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :groups, only: [:create, :destroy, :index, :update]
    resources :questions, only: [:show, :create, :update, :destroy]
    resources :choices, only: [:create, :destroy, :index, :show, :update]
    resources :answers, only: [:create, :update, :destroy]
    resources :active_polls, only: [:create, :index, :update]
  end
  root to: "static_pages#root"
end
