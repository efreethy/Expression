json.extract! @story, :title, :body, :created_at, :author_id
json.authorName @story.author.username
