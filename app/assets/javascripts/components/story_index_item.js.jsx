(function (root) {

  root.StoryIndexItem = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function () {

      return {title: this.props.story.title, body: this.props.story.body, imageUrl: this.props.story.imageUrl};
    },

    handleClickToStoryShow: function () {

      this.history.pushState(null, 'users/' + this.props.story.author_id +'/stories/' + this.props.story.id);
    },

    componentDidMount: function () {
      $("#user-stry-item-content-"+this.props.story.id).dotdotdot({ellipsis	: ' ...', height: 100});

      if (this.state.imageUrl !== undefined) {

        var bannerImageUrl = this.state.imageUrl;
        $('.idx-item-banner-img-'+this.props.story.id).css("background", "url("+bannerImageUrl+")");
        $('.idx-item-banner-img-'+this.props.story.id).css("background-position", "center");
        $('.idx-item-banner-img-'+this.props.story.id).css("background-size", "cover");
      }
    },


    render: function () {

      return (
        <div>
          <div className="story-index-item" onClick={this.handleClickToStoryShow}>
          <div className={"idx-item-banner-img idx-item-banner-img-"+this.props.story.id}>
          </div>
            <h2>{this.state.title}</h2>
        <div className="story-content-idx-item" id={"user-stry-item-content-" + this.props.story.id}  dangerouslySetInnerHTML={{__html: this.state.body}} />



          </div>
            <hr className="single-story-hr"/>
        </div>
      );
    }
  });
})(this);
