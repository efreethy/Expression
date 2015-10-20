json.extract! @user, :username, :id, :prof_image_url, :created_at
json.tag_subs @user.tag_subscriptions, :name, :id

json.followers @user.all_followers do |user|
  json.username user.username
  json.id user.id
end
json.following @user.all_followings do |user|
   json.username user.username
   json.id user.id
end
