$(function () {
  var root = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;
  window.Link = ReactRouter.Link;
  
  var App = React.createClass({
    render: function () {
      return (
        <div>
          <Navbar />
          <header><h1>Welcome to Expression!!</h1></header>
          {this.props.children}
        </div>
      );
    }
  });

  var routes = (
        <Route path="/" component={App}>
          <IndexRoute component={LandingPage}/>
          <Route path="users/:id" component={UserPage}></Route>
        </Route>
      );

    React.render(<Router>{routes}</Router>, root)
});
