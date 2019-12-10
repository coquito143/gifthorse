Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/list_by_age', to: 'ages#index'
  get '/all_gifts', to: 'gifts#all_gifts'
  get '/ages/:age_id/gifts', to: 'gifts#index_by_age'
  get '/ages/:age_id/gifts_by_price', to: 'gifts#index_by_age_sorted_by_price'
  get '/gifts', to: 'gifts#index_by_user'
  get '/gifts/:id', to: 'gifts#index_single_gift'

  post '/ages/:age_id/gifts', to: 'gifts#add_new'
  put '/gifts/:id', to: 'gifts#update'
  delete '/gifts/:id', to: 'gifts#destroy'

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
end
