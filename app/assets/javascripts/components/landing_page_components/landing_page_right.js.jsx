(function (root) {

  root.LandingPageRight = React.createClass({
    getInitialState: function () {
      return {user: {username: "", id: "", prof_image_url: "", created_at: "",
                      tag_subs: []}};
    },

    componentWillMount: function () {
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
          <div className="landing-page-right">
            <div  className="tag-follow-sidebar">
              <TagFollowSidebar tags={this.props.tags}/>
              <FeaturedTagsSideitem tags={this.props.tags}/>
              <TopStoriesSideitem />
            </div>
          </div>
      );
    }

  });
})(this);
