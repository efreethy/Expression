(function (root) {

  root.UserStoriesIndex = React.createClass({
    getInitialState: function () {
      return { authorStories: [] };
    },

    componentWillMount: function () {
      ApiUtil.fetchAuthorStories(this.props.author_id);
      StoryStore.addAuthorStoriesIndexChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
      ApiUtil.fetchAuthorStories(this.props.author_id);
      StoryStore.removeAuthorStoriesIndexChangeListener(this._onChange);
    },

    _onChange: function () {

      this.setState({ authorStories: StoryStore.allAuthorStories().slice(0,5) });
    },

    render: function () {

      var authorStories = this.state.authorStories.map(function (story) {
        return <StoryIndexItem key={story.id} story={story} />
      });

      return (
      <div >
        <p className="latest-stories-block">LATEST STORIES</p>

        {authorStories}
      </div>
      );
    }
  });
})(this);
