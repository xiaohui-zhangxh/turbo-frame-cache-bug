Rails.application.routes.draw do
  root to: 'pages#home'
  get 'pages/page1'
  get 'pages/page2'
  get 'pages/page3'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
