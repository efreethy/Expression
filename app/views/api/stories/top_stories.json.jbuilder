json.array! @top_stories do |story|
  json.id story.id
  json.title story.title
  json.author do
    json.username story.author.username
    json.id = story.author.id
  end
end
