class User < ApplicationRecord
  validates :session_token, uniqueness: true, presence: true 

  after_initialize :ensure_session_token

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

   def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
    # we pass the password string to bcrypt and bcrypt salts and. 
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
