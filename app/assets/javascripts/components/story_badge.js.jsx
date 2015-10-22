(function (root) {

  root.StoryBadge = React.createClass({
    getInitialState: function () {
      return {timeAgo: ""};
    },
    composeTimeAgo: function () {

      if (this.props.story.created_at !== "") {
      var creationDate = new Date(this.props.story.created_at);
        return  moment(creationDate).fromNow();
      }
    },
    render: function () {

    
      return (
        <div className={"story-badge-container " + this.props.classProp}>
          <div className="story-badge-prof-img">
            <ProfileImage width={45} height={45} imageUrl={this.props.story.author.profImageUrl} />
          </div>
          <div className="story-badge-right">
          <p className="story-badge-author-link"><Link to={'/users/' + this.props.story.author_id}>{this.props.story.author.name}</Link></p>
          {<p className="story-badge-time-ago">{this.composeTimeAgo(this.props.story.created_at)}</p>}
          </div>
        </div>
      );
    }
  });
})(this);
