(function (root) {

  root.StoryBadge = React.createClass({

    render: function () {

      return (
        <div className="StoryBadge">
          <p>Author: <Link to={'/users/' + this.props.story.author_id}>{this.props.story.authorName}</Link></p>
        </div>
      );
    }
  });
})(this);
