class AddProfImageUrlToUsers < ActiveRecord::Migration
  def change

    add_column :users, :prof_image_url, :string
  end
end
