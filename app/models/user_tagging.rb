class UserTagging < ActiveRecord::Base
    validates :story_id, :tag_id, null: false
    
    belongs_to(
    :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"
    )

  belongs_to(
    :tag,
    primary_key: :id,
    foreign_key: :tag_id,
    class_name: "Tag"
    )
end
