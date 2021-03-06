# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_username       (username) UNIQUE
#
class User < ApplicationRecord
    validates :username, :session_token, :password_digest, presence: true
    validates :username, :session_token, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
    
    attr_reader :password
    after_initialize :ensure_sesion_token!

    has_many :subs,
    primary_key: :id,
    foreign_key: :moderator_id,
    class_name: :Sub

    has_many :posts,
      foreign_key: :post_id,
      class_name: :Post

    def reset_session_token!
        current_user.reset_sesstion_token!
        self.save!
        self.session_token
    end
    
    def ensure_sesion_token!
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        return user if user.is_password?(password)
        nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

end
