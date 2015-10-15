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
