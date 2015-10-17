(function (root) {

  root.LandingPage = React.createClass({
    render: function () {
      return (
        <div className="landing-page-container">
      

        <header><h1>Welcome to Expression!!</h1></header>
          <LandingPageLeft />
          <LandingPageRight />
        </div>
      );
    }

  });
})(this);
