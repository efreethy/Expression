(function (root) {

  root.TagShowHeader = React.createClass({
    getInitialState: function () {
      return {isFollowed: false, tagName: this.props.tag.name};
    },

    componentWillMount: function () {
      ApiUtil.fetchSingleUser(CURRENT_USER_ID);

      UserStore.addUserShowChangeListener(this._onChange);

    },
    componentWillUnmount: function () {
      UserStore.removeUserShowChangeListener(this._onChange);
    },

   _onChange: function () {
     var tagName = this.props.tag.name;
     var isFollowed = this._determineIfTagIsFollowed(tagName);
     if (isFollowed) {
       this.setState({isFollowed: true});
     } else {
       this.setState({isFollowed: false});
     }
   },

   _determineIfTagIsFollowed: function (tagName) {

     var isFollowed = false;

     UserStore.singleUser().tag_subs.map(function (tag) {
       if (tag.name === tagName) {
         isFollowed =  true;
       }
     }.bind(this));

     return isFollowed;
   },

   handleFollowButtonClick: function () {

    if (this.state.isFollowed) {
      ApiUtil.deleteUserTagging(CURRENT_USER_ID, this.props.tag.id)
    } else {
      ApiUtil.createUserTagging(CURRENT_USER_ID, this.props.tag.id)
    }
   },

    render: function () {

      return (
            <div className="tag-show-header">
              <div className="tag-header-left">
                <p className="tagged-in">TAGGED IN</p><br/>
                <p className="tagged-name-show">{this.props.tag.name}</p>

              </div>
              <div className="tag-follow-button-right">
                <FollowButton followButtonClicked={this.handleFollowButtonClick} isFollowed={this.state.isFollowed}/>
              </div>
            </div>
            );
    }
  });
})(this);
