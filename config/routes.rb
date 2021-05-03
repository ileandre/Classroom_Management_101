Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  post "/comments/:student_id", to: 'comments#create'

  resources :comments
  resources :students
  resources :users

end
