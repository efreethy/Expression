json.extract! @story, :title, :body, :created_at, :author_id
json.authorName @story.author.username
json.bannerImageUrl @story.banner_image_url
json.tags @story.tags, :name
