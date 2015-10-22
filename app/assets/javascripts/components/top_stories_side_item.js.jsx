(function (root) {

  root.TopStoriesSideitem = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function () {
      return {topStories: [] };
    },

    componentWillMount: function () {
      ApiUtil.fetchTopStories();
      StoryStore.addTopStoryChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
      StoryStore.removeTopStoryChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({topStories: StoryStore.topStories()});
    },

    handleClickToStory: function (story_id, user_id) {
        this.history.pushState(null, 'users/' + user_id +'/stories/' + story_id);
    },

    generateTopStoriesList: function () {
      return this.state.topStories.map(function (story, idx) {
        if (story.title.length > 32) {
          story.title = story.title.slice(0,32) + "...";
        }
        return (
          <div key={idx} className="top-story-item">
            <div className="top-story-header-box">
              <div className="top-story-number">{idx+1}</div>
                <div className="top-story-title-author-box">
                <div className="top-story-title"><a onClick={this.handleClickToStory.bind(this,story.id,story.author.id)}> {story.title} </a></div><br/>
                <div className="top-story-author">{story.author.username}</div>
              </div>
            </div>
            <br/>
          </div>
        );
      }.bind(this));
    },

    render: function () {
      var topStories = this.generateTopStoriesList();

      return (
          <div>
            <div className="top-stories">TOP STORIES ON EXPRESSION</div>
            {topStories}
          </div>
      );
    }

  });
})(this);
