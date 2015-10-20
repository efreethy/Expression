(function (root) {

  root.UserShowFollowsBar = React.createClass({
    getInitialState: function () {
      return {followers: 0, following: 0};
    },

    componentWillMount: function () {
      UserStore.addUserShowChangeListener(this._onChange);
      ApiUtil.fetchSingleUser(this.props.author_id);
    },

    _onChange: function () {

      var user = UserStore.singleUser();
      if (user.id.toString() === this.props.author_id) {
        // this.setState({followers: user.followers.length.toString(), following: user.following.length.toString()})
      }
    },
    render: function () {
      return (
        <div className="usr-follow-bar-container">
         <div className="follow-bar-left">
          <div className="follow-text">FOLLOWING</div>
          {this.state.following}
         </div>
         <div className="follow-bar-right">
          <div className="follow-text">FOLLOWERS</div>
          {this.state.followers}
         </div>
        </div>
      );
    }
  });
})(this);
