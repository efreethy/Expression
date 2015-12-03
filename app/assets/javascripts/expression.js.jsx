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
          {this.props.children}
        </div>
      );
    }
  });

  var routes = (
        <Route path="/" component={App}>
          <IndexRoute component={LandingPage}/>
          <Route path="users/:id" component={UserPage}></Route>
          <Route path="users/:id/edit" component={UserEditPage}></Route>
          <Route path="users/:user_id/stories/:id" component={StoryShowPage}></Route>
          <Route path="users/:user_id/favorites" component={FavoriteIndexPage}></Route>
          <Route path="stories/new" component={StoryForm}></Route>
          <Route path="tags/:id" component={TagsShowPage}></Route>

        </Route>
      );

    React.render(<Router>{routes}</Router>, root)
});
