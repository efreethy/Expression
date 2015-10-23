json.users do
  json.array! @user_results do |user|
    json.id user.id
    json.username user.username
    json.profImageUrl user.prof_image_url
  end
end

json.stories do
  json.array! @story_results do |story|
    json.id story.id
    json.title story.title
    json.bannerImageUrl story.banner_image_url
  end
end

json.tags do
  json.array! @tag_results do |tag|
    json.name tag.name
    json.id tag.id
  end
end
