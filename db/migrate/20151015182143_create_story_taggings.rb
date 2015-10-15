class CreateStoryTaggings < ActiveRecord::Migration
  def change
    create_table :story_taggings do |t|
      t.integer :story_id, null: false
      t.integer :tag_id, null: false

      t.timestamps null: false
    end
    
    add_index :story_taggings, [:story_id, :tag_id], unique: true
  end
end
