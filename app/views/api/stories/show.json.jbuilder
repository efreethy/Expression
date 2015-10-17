json.extract! @story, :title, :body, :created_at, :author_id
json.author do
  json.name @story.author.username
  json.profImageUrl @story.author.prof_image_url
  json.id @story.author.id
end
json.bannerImageUrl @story.banner_image_url
json.tags @story.tags, :name, :id
