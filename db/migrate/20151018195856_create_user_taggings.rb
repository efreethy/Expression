class CreateUserTaggings < ActiveRecord::Migration
  def change
    create_table :user_taggings do |t|
      t.integer :user_id, null: false
      t.integer :tag_id, null: false

      t.timestamps null: false
    end

    add_index :user_taggings, [:user_id, :tag_id], unique: true
  end
end
