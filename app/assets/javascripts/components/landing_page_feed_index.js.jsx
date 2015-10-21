(function (root) {

  root.LandingPageFeedIndex = React.createClass({

    _generateLandingPageStoriesList: function () {

      if (typeof this.props.user.following !== "undefined" ) {
        if ( this.props.user.following.length > 0) {
      
            var stories = this.props.user.following.map(function (followedUser) {
            var storyObj = {author_id: followedUser.stories[0].author_id,
                 author: {profImageUrl: followedUser.prof_image_url, name: followedUser.username},
                 created_at: followedUser.stories[0].created_at};

            var storyIndexObj = {title: followedUser.stories[0].title, body: followedUser.stories[0].body,
                              imageUrl: followedUser.stories[0].banner_image_url ,authorId: followedUser.stories[0].author_id,
                                id: followedUser.stories[0].id};

            return (<div>
                    <div className="tag-show-story-badge"><StoryBadge key={followedUser.stories[0].id} story={storyObj} /></div>
                    <div className="tag-show-story-item"><StoryIndexItem key={followedUser.stories[0].id} story={storyIndexObj} /></div>
                    </div>);
          });

          return stories;
        }
      }
    },

    render: function () {
      var landingPageStories = this._generateLandingPageStoriesList();

      return (<div className="landing-page-feed-index">
         {landingPageStories}
      </div>);
    }
  });
})(this);
