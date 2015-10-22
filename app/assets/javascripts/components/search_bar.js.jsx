(function (root) {

  root.SearchBar = React.createClass({

    render: function () {
      return (
        <li> <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" className="form-control nav-bar-search" placeholder="Search Expression"/>
          </div>
          <button type="submit" className="btn btn-default glyphicon glyphicon-search"></button>
        </form></li>
      );
    }
  });
})(this);
