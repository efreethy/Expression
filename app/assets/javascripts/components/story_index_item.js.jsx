(function (root) {

  root.StoryIndexItem = React.createClass({
    getInitialState: function () {
      return {title: this.props.story.title, body: this.props.story.body};
    },

    componentWillMount: function () {

    },

    _onChange: function () {

    },

    render: function () {
      return (
        <div className="story-content">
          <h2>{this.state.title}</h2>

            <div dangerouslySetInnerHTML={{__html: this.state.body}} />
        
          <hr className="single-story-hr"/>
        </div>
      );
    }
  });
})(this);
