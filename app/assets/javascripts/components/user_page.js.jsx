(function (root) {

  root.UserPage = React.createClass({
    getInitialState: function () {
      return {user: {username: "", profImageUrl: ""}};
    },

    componentWillMount: function () {
      UserStore.addSingleUserShowChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
      UserStore.removeSingleUserShowChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({user: UserStore.userShow() });
    },

    componentWillReceiveProps: function (newProps) {
      ApiUtil.fetchUserShow(newProps.params.id);
    },

    render: function () {

      return (
      <div>
        <div className="user-prof-page">
          <UserHeaderBar author_id={this.props.params.id}/><br/>
        </div>
        <hr className="profile-page-hr"/>
        <div className="user-prof-page">
            <UserStoriesIndex author_id={this.props.params.id}/>
        </div>
      </div>
    );
    }
  });
})(this);
