# == Schema Information
#
# Table name: story_taggings
#
#  id         :integer          not null, primary key
#  story_id   :integer          not null
#  tag_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class StoryTagging < ActiveRecord::Base
  validates :story_id, :tag_id, null: false

  belongs_to(
  :story,
  primary_key: :id,
  foreign_key: :story_id,
  class_name: "Story"
  )

belongs_to(
  :tag,
  primary_key: :id,
  foreign_key: :tag_id,
  class_name: "Tag"
  )
  
end
