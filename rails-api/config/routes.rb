Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :volleyballs, only: [:index]
  resources :hiscores, only: [:index, :create]
end
