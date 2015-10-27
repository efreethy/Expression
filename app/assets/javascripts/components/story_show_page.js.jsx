(function (root) {

  root.StoryShowPage = React.createClass({
    getInitialState: function () {

      return {story: {id: "", title: "", body: "", created_at: "",
                      author: { name: "",profImageUrl: "", id: ""},
                      tags: [], recommenders: []}};
    },

    componentWillMount: function () {
      ApiUtil.fetchSingleStory(this.props.params.user_id, this.props.params.id);
      StoryStore.addAuthorStoryShowChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
      StoryStore.removeAuthorStoryShowChangeListener(this._onChange);
    },

    componentWillReceiveProps: function (newProps) {
      ApiUtil.fetchSingleStory(newProps.params.user_id, newProps.params.id);
    },
    
    componentDidMount: function () {
      if (this.state.story.bannerImageUrl !== undefined) {
        var bannerImageUrl = this.state.story.bannerImageUrl;
        $('.story-banner-image').css("background", "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+bannerImageUrl+")");
        $('.story-banner-image').css("background-position", "center");
        $('.story-banner-image').css("background-size", "cover");
      }
    },

    _onChange: function () {
      this.setState({story: StoryStore.singleAuthorStory()});
      var bannerImageUrl = this.state.story.bannerImageUrl;
      $('.story-banner-image').css("background", "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+bannerImageUrl+")");
      $('.story-banner-image').css("background-position", "center");
      $('.story-banner-image').css("background-size", "cover");
    },

    determineIfRecommendedByCurrentUser: function () {
      var isRecommended = false;
      this.state.story.recommenders.forEach(function (user) {
        if (user.id === CURRENT_USER_ID) {
          isRecommended = true;
        }
      });
      return isRecommended;
    },

    getRecommenderCount: function () {
      return this.state.story.recommenders.length;
    },

    render: function () {

      var tags = this.state.story.tags.map(function (tag) {return tag.name;});
      var isRecommended = this.determineIfRecommendedByCurrentUser();
      var recommenderCount = this.getRecommenderCount();

      return (
        <div>
          <div className="story-banner-image">
            <div className="story-title">
              <h1 className="story-title-show">{this.state.story.title}</h1>
            </div>
          </div>

          <div className="story-show-page">
          <div className="story-show-header">
            <StoryBadge classProp={"story-badge-show"} story={this.state.story} />
            <FavoriteButton story_id={this.state.story.id} isRecommended={isRecommended} recommenderCount={recommenderCount}/>
          </div>
          <br/><br/><br/><br/>
              <div className="story-content">

                <div dangerouslySetInnerHTML={{__html: this.state.story.body}} />
               </div>
              <StoryTagsAndBookmark tags={tags}/>
          </div>
        </div>

      );
    }
  });
})(this);
