(function (root) {

  root.UserHeaderBar = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function () {
      return {user: {username: "", profImageUrl: ""}};
    },

    componentWillMount: function () {
      ApiUtil.fetchSingleUser(CURRENT_USER_ID);
      UserStore.addSingleUserShowChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
      UserStore.removeSingleUserShowChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({ user: UserStore.userShow()});
    },

    handleFollowButtonClick: function () {
      if (this.isFollowing) {
        ApiUtil.deleteUserFollowing(CURRENT_USER_ID, this.state.user.id);
      } else {
        ApiUtil.createUserFollowing(CURRENT_USER_ID, this.state.user.id);
      }
    },

    updatePhotoUrl: function (url) {
      this.setState({ profImageUrl: url });
      ApiUtil.updateProfImage(url, CURRENT_USER_ID);
    },

    determineIfFollowing: function () {
        this.isFollowing = false;
      if (typeof UserStore.userShow() !== "undefined") {
        var userShow = UserStore.userShow();
        userShow.followers.forEach(function (user) {
          if (user.username === CURRENT_USER_NAME) {
            this.isFollowing = true;
          }
        }.bind(this));
      }
    },

    render: function () {
      this.determineIfFollowing();
      if (CURRENT_USER_ID === parseInt(this.props.author_id)) {
        var followButton = "";
        var uploadImageButton = (<div className="edit-prof-img-container">
          <UploadImageButton onSubmitPhoto={this.updatePhotoUrl} />
        </div>);
      } else {
        var followButton =  <FollowButton followButtonClicked={this.handleFollowButtonClick} classProp={" user-show-follow-btn"} isFollowed={this.isFollowing} />
      }


      return (

      <div className="user-header-bar">
        <div>
          <div>
            <ProfileImage imageUrl={this.state.user.prof_image_url}/>
          </div>
          <h3 className="user-show-username"> {this.state.user.username} </h3>
          {uploadImageButton}
          <UserShowFollowsBar author_id={this.props.author_id} />
          {followButton}
        </div>
      </div>
      );
    }
  });
})(this);
