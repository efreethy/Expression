# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ActiveRecord::Base
  validates :name, presence: true
  validates :name, uniqueness: true

  has_many :story_taggings

  has_many(
    :stories,
    through: :story_taggings,
    source: :story
  )

  def self.handleTagsCreation(params)
    existing_tags = Tag.where(name: params[:story][:tags])
    existing_tags_array = Tag.where(name: params[:story][:tags]).map { |tag| tag.name }

    new_tag_names = params[:story][:tags] - existing_tags_array

    new_tags = new_tag_names.map { |name| Tag.new(name: name) }
    return new_tags + existing_tags
  end

end
