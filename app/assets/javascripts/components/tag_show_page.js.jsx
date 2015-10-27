(function (root) {

  root.TagsShowPage = React.createClass({
    getInitialState: function () {
      return {tag: {name: "", stories: []}};
    },

    componentWillReceiveProps: function (newProps) {
      ApiUtil.fetchTag(newProps.routeParams.id);
      TagStore.addTagShowChangeListener(this._onChange);
    },

    componentDidMount: function () {
      ApiUtil.fetchTag(this.props.params.id);
      TagStore.addTagShowChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
      TagStore.removeTagShowChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({tag: TagStore.singleTag()});
    },

    render: function () {

      return (<div className="tag-show-container">
          <TagShowHeader  tag={this.state.tag}/><br/>
          <TagShowStoriesIndex tag={this.state.tag}/>
        </div>);
    }
  });
})(this);
