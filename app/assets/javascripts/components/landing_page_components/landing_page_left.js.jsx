(function (root) {

  root.LandingPageLeft = React.createClass({
    render: function () {
      return (
          <div className="landing-page-left">
            <div className="landing-feed">
              <LandingPageStoryForm />
            </div>
          </div>
      );
    }

  });
})(this);
