json.extract! @user, :username, :id, :prof_image_url, :created_at
json.tag_subs @user.tag_subscriptions do |tag|
  json.name tag.name
  json.id tag.id
  json.stories tag.stories do |story|
    json.title story.title
    json.body story.body
    json.banner_image_url story.banner_image_url
    json.id story.id
    json.author_id story.author_id
  end
end

json.followers @user.all_followers do |user|
  json.username user.username
  json.id user.id
end

json.following @user.all_followings do |user|
   json.username user.username
   json.id user.id
   json.id user.id
   json.prof_image_url user.prof_image_url
   json.stories user.stories.reverse do |story|
     json.title story.title
     json.created_at story.created_at
     json.body story.body
     json.banner_image_url story.banner_image_url
     json.id story.id
     json.author_id story.author_id
   end
end
