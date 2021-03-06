(function (root) {

  root.LandingPageStoryForm = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function () {
      return { toggleHeaderText: "Write Here", storyFormDisplay: "closed",
               formClicked: false,title: "", body: "",
               storyFormError: false };
    },

    onTitleChange: function (e) {
      this.setState({title: e.currentTarget.value});
    },

    onBodyChange: function(e) {
      this.setState({body: e.currentTarget.value});
    },


   componentDidMount: function () {
      StoryStore.addAuthorStoryShowChangeListener(this._onChange);
      var editor = new MediumEditor('.editable');
    },

    _onChange: function () {
      this.history.pushState(null, 'users/' + CURRENT_USER_ID+'/stories/' +StoryStore.singleAuthorStory().id);
    },

    handlePublishClick: function () {
      var postTitle = $('.landing-page-post-title')[0].value;
      var bodyHtml = $('.editable').html();
      var tagsArray = $('#tag-adder').tokenize().toArray();
      var bannerUrl = this.state.bannerImageUrl;
      if (postTitle !== "") {
        ApiUtil.createStory(postTitle, bodyHtml, tagsArray,  bannerUrl);
        this.setState({ storyFormDisplay: "closed", toggleHeaderText: "Write Here"});
      } else {
        this.setState({ storyFormError: true});
      }
    },

    updatePhotoUrl: function (url) {
      this.setState({ bannerImageUrl: url });
    },

    handleStoryFormClick: function (e) {
      e.preventDefault();
      if (this.state.formClicked === false) {
        // $('.editable.landing-page-post-body').text("");
        // $('.editable.landing-page-post-body').focus();
        $('.untouched').removeClass("untouched");
        // if ( $('.landing-page-post-body').text() === "Body...") {
        //   $('.landing-page-post-body').text(" ");
        // }
        this.setState({formClicked: true}, function () {
          if (typeof editor === "undefined") {
           var editor = new MediumEditor('.editable');
         }
        });
      } else { this.setState({formClicked: false}); }
    },

    handleClickToProfile: function (e) {
      e.preventDefault();
      this.history.pushState(null, "/users/"+ CURRENT_USER_ID);
    },

    toggleStoryFormClick: function (e) {
      e.preventDefault();
      if (this.state.storyFormDisplay === "closed") {

        this.setState({ storyFormDisplay: "open", toggleHeaderText: (<a onClick={this.handleClickToProfile}>{UserStore.singleUser().username}</a>)});
      } else {
        this.setState({ storyFormDisplay: "closed", toggleHeaderText: "Write Here"});
      }
    },

    determineFormContents: function (errorMessage) {
      var contents;
      if ( this.state.storyFormDisplay === "open") {
        contents = (
          <div>
            <div className="lp-story-display">
            <input type="text" className="landing-page-post-title"
                    onChange={this.onTitleChange} placeholder="Title" value={this.state.title}/>{errorMessage}

             <div onClick={this.handleStoryFormClick} className="untouched editable landing-page-post-body story-content"  >
                Body...
             </div>

              <br/>
            </div>
              <div className="complete-story-module">
                <UploadImageButton onSubmitPhoto={this.updatePhotoUrl} />
              <div className='publish-tags-container'>
                <div className="story-publish-btn" onClick={this.handlePublishClick}>Publish</div>
              </div>
                <TagAdder />
              </div>
            </div>
        );
      } else { contents = ""; }
      return contents;
    },

    determineErrorMessage: function () {
      var message;
      if ( this.state.storyFormError === true) {

        setTimeout(function () { this.setState({storyFormError: false}); }.bind(this),3000);
        return <div className="lp-please-enter-title">Please enter a title</div>;
      } else {
        message = <div></div>;
      }
      return message;
    },

    render: function () {
      var errorMessage = this.determineErrorMessage();
      var contents = this.determineFormContents(errorMessage);

      return (
        <div className="entire-story-form-header">

          <div onClick={this.toggleStoryFormClick}clasName="story-form-toggle-header">
            <ProfileImage width={45} height={45} imageUrl={this.props.user.prof_image_url} />
            <div style={{"display": "inline"}} className={'write-here story-content ' + this.state.storyFormDisplay} >{this.state.toggleHeaderText}</div>
          </div>
            <div className={"landing-page-story-form " + this.state.storyFormDisplay}>{ contents }</div>
        </div>

      );
    }

  });
})(this);
