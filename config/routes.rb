Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # get '/students/:student_id', to: 'students#add_comment'
  post "/comments/:student_id", to: 'comments#create'

  resources :comments
  resources :students
  resources :users

end
