json.array! @stories do |story|
  json.id story.id
  json.author_id story.author_id
  json.title story.title
  json.body story.body
  json.authorName story.author.username
  json.created_at story.created_at
end
