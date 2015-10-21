(function (root) {

  root.TagFollowSidebar = React.createClass({

    _generateTagItems: function () {
      var tags = this.props.tags.map(function (tag) {
        return (
          <TagItem key={tag.id} tag={tag} />
        );
      });
      return tags;
    },

    render: function () {
      var tags = this._generateTagItems();
    
      return (
          <div>
            <div className="tags-you-follow">TAGS YOU FOLLOW</div>
            {tags}
          </div>
      );
    }

  });
})(this);
