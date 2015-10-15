(function (root) {

  root.UserPage = React.createClass({
    render: function () {

      return (
      <div>
        <div className="user-prof-page">
          <UserHeaderBar author_id={this.props.params.id}/>
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
