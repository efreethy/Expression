(function (root) {

  root.TagsShowPage = React.createClass({
    getInitialState: function () {
      return {tag: {name: "", stories: []}};
    },

    componentWillMount: function () {
      ApiUtil.fetchTag(this.props.params.id);
      TagStore.addTagShowChangeListener(this._onChange);
    },

    componentWillUnount: function () {
      TagStore.removeTagShowChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({tag: TagStore.singleTag()});
    },

    render: function () {

      return (<div className="tag-show-container">
          <TagShowHeader  tag={this.state.tag}/>
        </div>);
    }
  });
})(this);
