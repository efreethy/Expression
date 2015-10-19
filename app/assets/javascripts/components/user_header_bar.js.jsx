(function (root) {

  root.UserHeaderBar = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function () {
      return {user: {username: "", profImageUrl: ""}};
    },

    componentWillMount: function () {
      ApiUtil.fetchSingleUser(this.props.author_id);
      UserStore.addUserShowChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
      UserStore.removeUserShowChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({ user: UserStore.singleUser()});
    },


    updatePhotoUrl: function (url) {
      this.setState({ profImageUrl: url });
      ApiUtil.updateProfImage(url, CURRENT_USER_ID);
    },

    render: function () {

      if (CURRENT_USER_ID === parseInt(this.props.author_id)) {
        var uploadImageButton = (<div className="edit-prof-img-container">
          <UploadImageButton onSubmitPhoto={this.updatePhotoUrl} />
        </div>);
      }

      return (
      <div className="user-header-bar">
        <div>
          <ProfileImage imageUrl={this.state.user.prof_image_url}/>
        </div>
        <h3> {this.state.user.username} </h3>
        {uploadImageButton}
      </div>
      );
    }
  });
})(this);
