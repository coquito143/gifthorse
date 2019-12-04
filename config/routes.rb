Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/list_by_age', to: 'ages#index'
  get '/ages/:age_id/gifts', to: 'gifts#index_by_age'
  get '/gifts', to: 'gifts#index_by_user'
  get '/gifts/:id', to: 'gifts#index_single_gift'

  post '/ages/:age_id/gifts', to: 'gifts#add_new'
  put '/gifts/:id', to: 'gifts#update'
  delete '/gifts/:id', to: 'gifts#destroy'

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
end
