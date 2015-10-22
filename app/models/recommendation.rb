class Recommendation < ActiveRecord::Base
  validates :story_id, :user_id, presence: true

  belongs_to :story
  belongs_to :user
end
