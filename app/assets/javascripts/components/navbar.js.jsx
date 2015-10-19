(function(root) {

  root.Navbar = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function () {
      return {username: "", result: { prof_image_url: ""}};
    },

    _onChange: function () {
      this.setState({result: { prof_image_url: UserStore.singleUser().prof_image_url}});
    },

    componentWillMount: function () {
      ApiUtil.fetchSingleUser(CURRENT_USER_ID);
      UserStore.addUserShowChangeListener(this._onChange);
      that = this;
      $.ajax({
        type: "GET",
        url: "/users/"+root.CURRENT_USER_ID,
        dataType: "json",
        success: function(result) {
          that.setState({username: result.username, result});
          $.cloudinary.config({ cloud_name: "efreezy", api_key: "143452987158649"});
        }
      });
    },

    componentWillUnmount: function () {
      UserStore.removeUserShowChangeListener(this._onChange);
    },

    handleWriteStoryClick: function () {
      this.history.pushState(null, 'stories/new');
    },


    handleClickToProfile: function (e) {
        e.preventDefault();
        this.history.pushState(null, 'users/' + root.CURRENT_USER_ID);
    },

    handleClickToHome: function (e) {
        e.preventDefault();
        this.history.pushState(null, '/');
    },

    handleSignOutClick: function () {

      $.ajax({
        type: "DELETE",
        url: "/session",
        dataType: "json",
        success: function(result) {
            document.location ='/';
        }
      });
    },

    render: function () {

      return (
        <nav className="navbar navbar-default">
      <div className="container-fluid">

        <div className="navbar-header">
          <a className="navbar-brand" href="javascript:void(0)">
          <img onClick={this.handleClickToHome} src="/assets/expression-logo-2.png" alt="expression-logo" />
          </a>
        </div>


        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">

            <li ><Link to={`/`}>Home</Link></li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
            <li> <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control nav-bar-search" placeholder="Search Expression"/>
              </div>
              <button type="submit" className="btn btn-default glyphicon glyphicon-search"></button>
            </form></li>
              <li onClick={this.handleWriteStoryClick}><a href="javascript:void(0)">Write a Story</a></li>

            <li onClick={this.handleClickToProfile}><ProfileImage classProp={"nav-bar-prof-img"} width={35} height={35} imageUrl={this.state.result.prof_image_url}/></li>

            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.state.username}<span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li onClick={this.handleClickToProfile} ><a href="javascript:void(0)">Profile</a></li>
                <li role="separator" className="divider"></li>
                <li onClick={this.handleSignOutClick}><a href="javascript:void(0)">Sign Out</a></li>
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
