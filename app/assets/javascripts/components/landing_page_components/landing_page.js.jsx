(function (root) {

  root.LandingPage = React.createClass({
    render: function () {
      return (
        <div className="landing-page-container">
          <LandingPageLeft />
          <LandingPageRight />
        </div>
      );
    }

  });
})(this);
