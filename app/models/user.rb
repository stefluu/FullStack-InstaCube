class User < ApplicationRecord
  validates :username, :email, :display_name, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6}

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :likes
  has_many :images
  has_many :comments


  def password=(pw)
    @password = pw
    self.password = BCrypt::Password.create(pw)
  end

  def self.find_by_credentials(username, pw)
  end

  def is_password?
  end

  def reset_session_token
  end

  def ensure_session_token
  end
end
