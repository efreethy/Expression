class AddBannerImageUrlToStories < ActiveRecord::Migration
  def change
    add_column :stories, :banner_image_url, :string
  end
end
