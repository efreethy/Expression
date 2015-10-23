(function (root) {

  root.SearchBar = React.createClass({
    getInitialState: function () {
      return {queryText: "", results: {users: [], stories: [], tags: []}};
    },

    componentWillMount: function () {
      SearchResultsStore.addSearchResultsChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
      SearchResultsStore.removeSearchResultsChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({results: SearchResultsStore.searchResults()});
    },

    handleQueryTextChange: function (e) {
      e.preventDefault();
      this.setState({queryText: e.currentTarget.value, currentLength: 0});
      if (e.currentTarget.value.length > 0) {
        this.fetchSearchResults();
      }
    },

    fetchSearchResults: function () {
      results = ApiUtil.fetchSearchResults(this.state.queryText);
    },

    makeUserResults: function (results) {
      var users = this.state.results.users.map(function (user) {
        return (
          <div>
            <div>{user.username}</div>
          </div>
        );
      });

      var tags = this.state.results.tags.map(function (tag) {
        return (
          <div>
            <div>{tag.name}</div>
          </div>
        );
      });

      var stories = this.state.results.stories.map(function (story) {
        return (
          <div>
            <div>{story.title}</div>
          </div>
        );
      });

      return (users.concat(tags).concat(stories));
    },

    generateResults: function () {
      var userResults = this.makeUserResults(this.state.results.user);
      return userResults;
    },

    render: function () {
      var results = this.generateResults();
      if (this.state.queryText === "") {
        results = "";
      }
      return (
        <li> <form className="navbar-form navbar-left" role="search">

          <div className="form-group">
            <input type="text" className="form-control nav-bar-search"
                    placeholder="Search Expression" value={this.state.queryText}
                    onChange={this.handleQueryTextChange}/>
              {<div className="search-results">{results}</div>}
          </div>

          <button type="submit" className="btn btn-default glyphicon glyphicon-search"></button>
        </form></li>
      );
    }
  });
})(this);
