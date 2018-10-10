class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_methods: :current_user, :require_login, :logged_in?

  def current_user
    @current_user || User.find_by(session_token: session[:session_token])
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def require_login
  end

  def logged_in?
    !!current_user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end
end
