class ApplicationController < ActionController::API
    SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

    def encode(payload, exp = 24.hours.from_now)
        payload[:exp] = exp.to_i
        JWT.encode(payload, SECRET_KEY)
    end

    def decode(token)
        decoded = JWT.decode(token, SECRET_KEY)[0]
        HashWithIndifferentAccess.new decoded
    end

def authorize_request
    header = request.headers['Authorization']       #pull out the 'authorization' headerstored in the request header
    header = header.split(' ').last if header
    #we begin ruby's version of a try-catch
    begin       #try
    @decoded = decode(header)
    @current_teacher = Teacher.find(@decoded[:id])
    #rescue = catch <-- if you do not provide an error, then by default, the StandardError will appear
    rescue ActiveRecord::RecordNotFound => e        #e for exception
        render json: {errors: e.message}, status: :unauthorized         #if you're not found inth data base
    rescue JWT::DecodeError => e
        render json: {errors: e.message}, status: :unauthorized         #if the token is wrong
end

end
