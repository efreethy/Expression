(function (root) {

  root.FeaturedTagsSideitem = React.createClass({

    _generateFeaturedTagItems: function () {
      var tags = this.props.tags.map(function (tag) {
        return (
          <TagItem key={tag.id} tag={tag} />
        );
      });
      return tags;
    },

    render: function () {
      var tags = this._generateFeaturedTagItems();
      return (
          <div>
            <div className="featured-tags">FEATURED TAGS</div>
              {tags}
          </div>
      );
    }

  });
})(this);
