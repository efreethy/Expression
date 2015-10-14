(function (root) {

  root.UserPage = React.createClass({
    render: function () {
  
      return (
      <div>
        <div className="user-prof-page">
          <h1>UserHeaderBar Component</h1>
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
