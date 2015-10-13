$(function () {
  var root = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;

  var App = React.createClass({
    render: function () {
      return (
        <div>
          <Navbar />
          <header><h1>Welcome to Expression!!</h1></header>
        </div>
      );
    }
  });

  var routes = (
        <Route path="/" component={App}>

        </Route>
      );

    React.render(<Router>{routes}</Router>, root)
});
