(function (root) {

  root.LandingPageStoryForm = React.createClass({
    getInitialState: function () {
      return {title: "", body: ""};
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
      var postTitle = $('.landing-page-post-title')[0].value
      var bodyHtml = $('.editable').html();
      var tagsArray = $('#tag-adder').tokenize().toArray();
      var bannerUrl = this.state.bannerImageUrl;
      debugger;
      ApiUtil.createStory(postTitle, bodyHtml, tagsArray,  bannerUrl);
    },

    updatePhotoUrl: function (url) {

      this.setState({ bannerImageUrl: url });
    },

    render: function () {
      return (
        <div className="landing-page-story-form">
          <input type="text" className="landing-page-post-title"
                  onChange={this.onTitleChange} placeholder="Title" value={this.state.title}/>

         <div className="editable landing-page-post-body story-content"  >
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
      );
    }

  });
})(this);
