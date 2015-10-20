json.array! @user.all_followers do |follower|
  json.id follower.id
  json.username follower.username
end
