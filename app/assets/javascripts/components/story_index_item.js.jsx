(function (root) {

  root.StoryIndexItem = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function () {

      return {title: this.props.story.title, body: this.props.story.body};
    },

    handleClickToStoryShow: function () {

      this.history.pushState(null, 'users/' + this.props.story.author_id +'/stories/' + this.props.story.id);
    },

    render: function () {
      
      return (
        <div>

          <div className="story-content story-index-item" onClick={this.handleClickToStoryShow}>
            <h2>{this.state.title}</h2>


            <hr className="single-story-hr"/>
          </div>
        </div>
      );
    }
  });
})(this);
