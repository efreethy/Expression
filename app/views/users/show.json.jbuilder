json.extract! @user, :username, :id, :prof_image_url, :created_at
json.tag_subs @user.tag_subscriptions, :name, :id
