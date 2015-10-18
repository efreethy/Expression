(function (root) {

  root.TagShowHeader = React.createClass({

    render: function () {

      return (
            <div className="tag-show-header">
              <div className="tag-header-left">
                <p className="tagged-in">TAGGED IN</p><br/>
                <p className="tagged-name-show">{this.props.tag.name}</p>

              </div>
              <div className="tag-follow-button-right">
                <FollowButton />
              </div>
            </div>
            );
    }
  });
})(this);
