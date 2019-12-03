Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/list_by_age', to: 'ages#index'
  get '/list_by_age/:age_id/gifts', to: 'gifts#index_by_age'
  get '/gifts', to: 'gifts#index_by_user'
  
  post '/ages/:age_id/gifts', to: 'gifts#add_new'
  put '/gifts/:giftid', to: 'gifts#update'
  delete '/gifts/:giftid', to: 'gifts#destroy'

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
end
