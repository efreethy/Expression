(function (root) {

  root.LandingPageLeft = React.createClass({
    render: function () {
      return (
          <div className="landing-page-left">
            <div className="landing-feed">
              <LandingPageStoryForm user={this.props.user}/>
              <LandingPageFeedIndex user={this.props.user}/>
            </div>
          </div>
      );
    }

  });
})(this);
