(function (root) {


  root.StoryForm = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function () {
      return { formClicked: false, bannerImageUrl: "https://res.cloudinary.com/efreezy/image/upload/v1444957128/uboghlrcb4hri2qv7bah.jpg",
              storyFormError: false };
    },

    componentDidMount: function () {
      var editor = new MediumEditor('.editable',{
        placeholder: {
          text: 'This is the placeholder text'
        }
      });
    },



    handlePublishClick: function () {
      var postTitle = $('.post-title')[0].value;
      var bodyHtml = $('.editable').html();
      var tagsArray = $('#tag-adder').tokenize().toArray();
      var bannerUrl = this.state.bannerImageUrl;
      if (postTitle !== "") {
        ApiUtil.createStory(postTitle, bodyHtml, tagsArray, bannerUrl, CURRENT_USER_ID);
        this.history.pushState(null, '/');
      } else {
        this.setState({ storyFormError: true});
      }

    },

    updatePhotoUrl: function (url) {
      this.setState({ bannerImageUrl: url });
    },

    handleStoryFormClick: function () {
      if (this.state.formClicked === false) {
        $('.editable.story-content.story-body').text("");
        $('.untouched').removeClass("untouched");
        this.setState({formClicked: true});
      }
    },

    determineErrorMessage: function () {
      var message;
      if ( this.state.storyFormError === true) {
        setTimeout(function () { this.setState({storyFormError: false}); }.bind(this),3000);
        return <div className="story-form-please-enter-title">Please enter a title.</div>;
      } else {
        message = <div></div>;
      }
      return message;
    },

    render: function () {
        var errorMessage = this.determineErrorMessage();
      return (
        <div>
          <div className="story-form-container">
             <p className="post-a-story"> Post a Story </p>
            <br/>
            <div>
            <input type="text" className="post-title story-content"
                    placeholder="Title"/>
            </div>
            <br/>
            <div onClick={this.handleStoryFormClick} className="editable story-content story-body" >
              Body..
            </div>
          </div>

          <div className="complete-story-module story-form-page">
            <UploadImageButton onSubmitPhoto={this.updatePhotoUrl} />
          <div className='publish-tags-container'>
            <div className="story-publish-btn" onClick={this.handlePublishClick}>Publish</div>
            </div>
            <TagAdder />
          </div>
          {errorMessage}
         </div>

        );
      }
  });
})(this);
