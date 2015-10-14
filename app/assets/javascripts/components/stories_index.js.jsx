(function (root) {

  root.UserStoriesIndex = React.createClass({
    getInitialState: function () {
      return { authorStories: [] };
    },

    componentWillMount: function () {
      ApiUtil.fetchAuthorStories(this.props.author_id);
      StoryStore.addAuthorStoriesIndexChangeListener(this._onChange);
    },

    _onChange: function () {

      this.setState({ authorStories: StoryStore.allAuthorStories() });
    },

    render: function () {

      var authorStories = this.state.authorStories.map(function (story) {
        return <StoryIndexItem story={story} />
      });

      return (
      <div >
        <p className="latest-stories-block">LATEST STORIES</p>
        <h1>Stories Index</h1>
        {authorStories}
      </div>
      );
    }
  });
})(this);
