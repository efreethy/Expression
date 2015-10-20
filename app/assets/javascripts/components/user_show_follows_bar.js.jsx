(function (root) {

  root.UserShowFollowsBar = React.createClass({
    getInitialState: function () {
      return {followers: 0, following: 0};
    },

    componentWillMount: function () {
      ApiUtil.fetchUserShow(this.props.author_id);
      UserStore.addSingleUserShowChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
      UserStore.removeSingleUserShowChangeListener(this._onChange);
    },

    _onChange: function () {
      var user = UserStore.userShow();

      if (user.id.toString() === this.props.author_id) {
        this.setState({followers: user.followers.length.toString(), following: user.following.length.toString()});
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
