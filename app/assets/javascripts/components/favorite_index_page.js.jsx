(function (root) {

  root.FavoriteIndexPage = React.createClass({
    getInitialState: function () {
      return { favoriteStories: [] };
    },

    componentWillMount: function () {
      StoryStore.addFavoriteStoriesIndexChangeListener(this._onChange);
      ApiUtil.fetchUserFavorites(CURRENT_USER_ID);
    },

    _onChange: function () {
      this.setState({favoriteStories: StoryStore.allFavoriteStories() });
    },

    generateFavoriteStories: function () {
      var stories = this.state.favoriteStories.map(function (story) {
        return (<div>
          {story.title}<br/>
          {story.body}<br/>
          {story.authorName}
          </div>);
      });
      return stories;
    },

    render: function () {
      var stories = this.generateFavoriteStories();
  
      return (<div> FavoriteIndexPage
            {stories}
        </div>);
    }
  });
})(this);
