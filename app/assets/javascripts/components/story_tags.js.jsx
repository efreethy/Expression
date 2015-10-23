(function (root) {

  root.StoryTagsAndBookmark = React.createClass({
    getInitialState: function () {
      return {tags: this.props.tags}
    },

    componentWillMount: function () {
      StoryStore.addAuthorStoryShowChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
      StoryStore.removeAuthorStoryShowChangeListener(this._onChange);
    },

    _onChange: function () {
      var storyTags = StoryStore.singleAuthorStory().tags;
      if (typeof storyTags !== "undefined") {
        this.setState({tags: storyTags.map(function (tag) {return tag;}) });
      }
    },

    render: function () {
      var tags = this.state.tags.map(function (tag) {
        return (<TagItem key={tag.id} tag={tag}/>);
      }.bind(this));

      return (
        <div className="story-tags-container">
         {tags}
        </div>
      );
    }
  });
})(this);
