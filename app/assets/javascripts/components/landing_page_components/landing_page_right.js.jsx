(function (root) {

  root.LandingPageRight = React.createClass({

    render: function () {
      return (
          <div className="landing-page-right">
            <div  className="tag-follow-sidebar">
              <TagFollowSidebar tags={this.props.tags}/>
              <FeaturedTagsSideitem tags={this.props.tags}/>
            </div>
          </div>
      );
    }

  });
})(this);
