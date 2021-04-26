Rails.application.routes.draw do
  get '/auth/verify', to: 'authentication#verify'
  post '/auth/login', to: 'authentication#login'
  
  resources :teachers do
    resources :students do 
      resources :comments
    end
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
