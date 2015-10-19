json.name @tag.name
json.id @tag.id
json.created_at @tag.created_at
json.stories @tag.stories do |story|
   json.title story.title
   json.body story.body
   json.id story.id
   json.bannerImageUrl story.banner_image_url
   json.createdAt story.created_at
   json.author do
      json.username story.author.username
      json.prof_image_url story.author.prof_image_url
      json.authorId story.author.id
     end
end
