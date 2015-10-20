(function (root) {

  root.LandingPageStoryForm = React.createClass({
    getInitialState: function () {
      return { toggleHeaderText: "Write Here", storyFormDisplay: "hidden", formClicked: false,title: "", body: ""};
    },

    onTitleChange: function (e) {
      this.setState({title: e.currentTarget.value});
    },

    onBodyChange: function(e) {
      this.setState({body: e.currentTarget.value});
    },


   componentDidMount: function () {
      var editor = new MediumEditor('.editable');
    },

    handlePublishClick: function () {
      var postTitle = $('.landing-page-post-title')[0].value;
      var bodyHtml = $('.editable').html();
      var tagsArray = $('#tag-adder').tokenize().toArray();
      var bannerUrl = this.state.bannerImageUrl;
      ApiUtil.createStory(postTitle, bodyHtml, tagsArray,  bannerUrl);
    },

    updatePhotoUrl: function (url) {
      this.setState({ bannerImageUrl: url });
    },

    handleStoryFormClick: function () {
      if (this.state.formClicked === false) {
        $('.editable.landing-page-post-body').text("");
        $('.untouched').removeClass("untouched");
        this.setState({formClicked: true})
      }
    },

    toggleStoryFormClick: function (e) {
      e.preventDefault();
      if (this.state.storyFormDisplay === "hidden") {
      this.setState({ storyFormDisplay: "open"});
    } else {
      this.setState({ storyFormDisplay: "hidden"});
    }
    },


    render: function () {

      return (
        <div className="entire-story-form-header">
          <div onClick={this.toggleStoryFormClick}clasName="story-form-toggle-header">
            <ProfileImage width={45} height={45} imageUrl={this.props.user.prof_image_url} />
            <div style={{"display": "inline"}} className='write-here story-content'>{this.state.toggleHeaderText}</div>
          </div>
            <div className={"landing-page-story-form " + this.state.storyFormDisplay}>
              <input type="text" className="landing-page-post-title"
                      onChange={this.onTitleChange} placeholder="Title" value={this.state.title}/>

             <div onClick={this.handleStoryFormClick} className="untouched editable landing-page-post-body story-content"  >
                Body...
             </div>

              <br/>
              <div className="complete-story-module">
                <UploadImageButton onSubmitPhoto={this.updatePhotoUrl} />
              <div className='publish-tags-container'>
                <div className="story-publish-btn" onClick={this.handlePublishClick}>Publish</div>
                </div>
                <TagAdder />
              </div>
            </div>
          </div>
      );
    }

  });
})(this);
