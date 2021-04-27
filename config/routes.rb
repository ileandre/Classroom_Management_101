Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # get '/students/:student_id', to: 'students#add_comment'
  
  resources :comments
  resources :students
  resources :users

end
