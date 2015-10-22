(function (root) {

  root.FavoriteButton = React.createClass({

    handleFavoriteClick: function () {
      if (this.props.isRecommended === true) {
        ApiUtil.deleteRecommendation(StoryStore.singleAuthorStory().id, CURRENT_USER_ID);
      } else {
        ApiUtil.createRecommendation(StoryStore.singleAuthorStory().id, CURRENT_USER_ID);
      }
    },


    render: function () {
      if (this.props.isRecommended === true) {
        var recommendedClass = "flw-btn-is-recommended";
      } else {
        var recommendedClass = "";
      }
      return (
        <div className="favorite-button-show-page">
          <div onClick={this.handleFavoriteClick} className={"glyphicon glyphicon-heart " + recommendedClass}></div>
          {this.props.recommenderCount} others recommended
        </div>
      );
    }
  });
})(this);
