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
    header_req = request.headers['Authorization']
    print "HEAADER REQUEST!!"
    print header_req
    header = header_req.split(' ').last if header_req
    begin
      @decoded = decode(header)
      print "DECODED!"
      print @decoded
      @current_user = User.find(@decoded[:id])
      print "HEERRRERER! #{@current_user}"
    rescue ActiveRecord::RecordNotFound => e
      print "ERROR 1!"
      render json: { errors: e.message }, status: :unauthorized
    rescue JWT::DecodeError => e
      print "ERROR 2!"
      render json: { errors: e.message }, status: :unauthorized
    end
  end
end
