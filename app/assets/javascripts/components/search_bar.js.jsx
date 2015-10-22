(function (root) {

  root.SearchBar = React.createClass({
    getInitialState: function () {
      return {queryText: ""};
    },

    handleQueryTextChange: function (e) {
      e.preventDefault();
      this.setState({queryText: e.currentTarget.value});
    },

    render: function () {
      return (
        <li> <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" className="form-control nav-bar-search"
                    placeholder="Search Expression" value={this.state.queryText}
                    onChange={this.handleQueryTextChange}/>
          </div>
          <button type="submit" className="btn btn-default glyphicon glyphicon-search"></button>
        </form></li>
      );
    }
  });
})(this);
