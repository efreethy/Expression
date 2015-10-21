(function (root) {

  root.LandingPage = React.createClass({
    getInitialState: function () {
      return {user: {username: "", id: "", prof_image_url: "", created_at: "",
                      tag_subs: []}};
    },
    componentWillMount: function () {
      ApiUtil.fetchSingleUser(CURRENT_USER_ID);
      UserStore.addUserShowChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
      UserStore.removeUserShowChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({user: UserStore.singleUser()});
    },

    render: function () {
    
      return (
        <div className="landing-page-container">
          <LandingPageLeft user={this.state.user}/>
          <LandingPageRight tags={this.state.user.tag_subs} />
        </div>
      );
    }

  });
})(this);
