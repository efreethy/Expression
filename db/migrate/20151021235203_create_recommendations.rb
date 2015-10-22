class CreateRecommendations < ActiveRecord::Migration
  def change
    create_table :recommendations do |t|
      t.integer :story_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    
    add_index :recommendations, [:story_id, :user_id], unique: true
  end
end
