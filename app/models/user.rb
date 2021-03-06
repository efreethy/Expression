# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  prof_image_url  :string
#

class User < ActiveRecord::Base
  validates :username, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :recommendations
  has_many :recommended_stories, through: :recommendations, source: :story

  has_many(
    :followers,
    class_name: 'Following',
    foreign_key: :user_id,
    primary_key: :id
    )

  has_many :all_followers, through: :followers, foreign_key: :follower_id, source: :follower


  has_many(
    :following,
    class_name: 'Following',
    foreign_key: :follower_id,
    primary_key: :id
    )


  has_many :all_followings, through: :following, foreign_key: :user_id, source: :user

  after_initialize :ensure_session_token

  has_many(
    :stories,
    class_name: "Story",
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many :user_taggings

  has_many(
    :tag_subscriptions,
    through: :user_taggings,
    source: :tag
  )


  attr_reader :password
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user && user.is_password?(password)
    user
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = generate_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_token
  end

end
