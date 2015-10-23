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

    handleSearchClick: function () {
      this.setState({queryText: ""});
    },

    fetchSearchResults: function () {
      results = ApiUtil.fetchSearchResults(this.state.queryText);
    },

    makeResults: function (results) {
      var users = this.state.results.users.map(function (user, idx) {
        return (
          <div key={idx}>
            <div onClick={this.handleSearchClick} className="search-result-item">
            <ProfileImage classProp="search-result-prof-image" width={30} height={30} imageUrl={user.profImageUrl} />
            <Link to={"users/"+user.id}>{user.username}</Link>
            </div>
          </div>
        );
      }.bind(this));

      var tags = this.state.results.tags.map(function (tag, idx) {

        return (
          <div key={idx} >
            <div onClick={this.handleSearchClick}className="search-result-item"><div className="glyphicon glyphicon-tag"></div>

            <Link to={"tags/"+tag.id}>{tag.name}</Link>
            </div>
          </div>
        );
      }.bind(this));

      var stories = this.state.results.stories.map(function (story, idx) {
        var storyText;
        if (story.title.length > 30) { storyText = (story.title.slice(0,30) + "..."); } else  {storyText = story.title;}
        return (
          <div key={idx}>
            <div onClick={this.handleSearchClick} className="search-result-item story">
            <Link to={"users/"+story.author_id+ "/stories/"+story.id}>{storyText}</Link></div>
          </div>
        );
      }.bind(this));

      var wrappedUsers = ([<div key={"wrappedUsers"}><div className="search-header">USERS</div>{users}</div>]);
      var wrappedTags = ([<div key={"wrappedTags"}><div className="search-header">TAGS</div>{tags}</div>]);
      var wrappedStories = ([<div key={"wrappedStories"}><div className="search-header">STORIES</div>{stories}</div>]);
      var wrappedResults = [<div key={"wrappedResults"} className="wrapped-search-results">{wrappedUsers.concat(wrappedStories).concat(wrappedTags)}</div>];
      return (wrappedResults);
    },

    generateResults: function () {
      var userResults = this.makeResults(this.state.results.user);
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

        </form></li>
      );
    }
  });
})(this);
