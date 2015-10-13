(function(root) {

  root.Navbar = React.createClass({
    getInitialState: function () {
      return {username: ""};
    },

    componentWillMount: function () {
      that = this;
      $.ajax({
        type: "GET",
        url: "/users/"+root.CURRENT_USER_ID,
        dataType: "json",
        success: function(result) {
          that.setState({username: result.username});
        }
      });
    },

    handleSignOutClick: function () {

    },

    render: function () {

      return (
        <nav className="navbar navbar-default">
      <div className="container-fluid">

        <div className="navbar-header">

          <a className="navbar-brand" href="#">Expression</a>
        </div>


        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><a href="#">Home</a></li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
            <li> <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search Expression"/>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form></li>
              <li><a href="#">Write a Story</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.state.username}<span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Profile</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#" onClick={this.handleSignOutClick}>Sign Out</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      );
    }
  }
  );
})(this);
