Rails.application.routes.draw do
  resources :chamados
  resources :agendamentos
  resources :balances
  resources :patrimonio_clientes
  resources :patrimonios

  match '/clientes', controller: 'cors', action: 'cors_preflight_check', via: [:options]
  match '/usuarios', controller: 'cors', action: 'cors_preflight_check', via: [:options]
  
  resources :usuarios
  resources :clientes
  # get 'home/index'
  root 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
