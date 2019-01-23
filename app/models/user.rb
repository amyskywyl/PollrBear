class User < ApplicationRecord

  attr_reader :password

  validates :username, :email, :firstname, :lastname, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token, :ensure_username

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password) 
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    self.save!
    self.session_token
  end

  def set_username
    generate_unique_username
    self.save!
    self.username
  end

  private

  def ensure_username
    generate_unique_username unless self.username
  end

  def new_username
    self.firstname + self.lastname + Random.rand(1...99).to_s
  end
  
  def generate_unique_username
    self.username = new_username

    while User.find_by(username: self.username)
      self.username = new_username
    end
    
    self.username
  end

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end
  
end