(function (root) {

  root.FollowButton = React.createClass({

    render: function () {
      if (this.props.isFollowed === true) {
        var followClass = "followed";
        var followText = "Following";
      } else {
        var followClass = "";
        var followText = "Follow";
      }
      return (
            <div onClick={this.props.followButtonClicked} className={"follow-btn "+followClass}>
              {followText}
            </div>
            );
    }
  });
})(this);
