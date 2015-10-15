json.extract! @story, :title, :body, :created_at, :author_id
json.authorName @story.author.username
json.tags @story.tags, :name
