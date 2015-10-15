(function (root) {

  root.StoryShowPage = React.createClass({
    getInitialState: function () {
      return {story: {id: "", title: "", body: "", created_at: "", authorName: "", }};
    },

    componentWillMount: function () {
      ApiUtil.fetchSingleStory(this.props.params.user_id, this.props.params.id);
      StoryStore.addAuthorStoryShowChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
      StoryStore.removeAuthorStoryShowChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({story: StoryStore.singleAuthorStory()});
    },

    render: function () {

      return (
        <div className="story-show-page">
          <StoryBadge story={this.state.story} />
            <div className="story-content">
             <h2>{this.state.story.title}</h2>
              <div dangerouslySetInnerHTML={{__html: this.state.story.body}} />
             </div>
        </div>
      );
    }
  });
})(this);
