(function (root) {

  root.TagShowStoriesIndex = React.createClass({

    _generateTagStoriesList: function () {

      var stories = this.props.tag.stories.map(function (story) {
        var storyObj = {author_id: story.author.authorId,
	           author: {profImageUrl: story.author.prof_image_url, name: story.author.username},
             created_at: story.createdAt};

      var storyIndexObj = {title: story.title, body: story.body,
                          imageUrl: story.bannerImageUrl ,authorId: story.author.authorId,
                            id: story.id };

          return (<div>
                  <div className="tag-show-story-badge"><StoryBadge key={story.id} story={storyObj} /></div>
                  <div className="tag-show-story-item"><StoryIndexItem key={story.id} story={storyIndexObj} /></div>
                  </div>);
      });
      return stories;
    },

    render: function () {
      var tagStories = this._generateTagStoriesList();

      return (<div className="tag-show-stories-index">
        {tagStories}
      </div>);
    }
  });
})(this);
