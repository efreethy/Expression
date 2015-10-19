(function (root) {


  root.StoryForm = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function () {
      return { bannerImageUrl: "https://res.cloudinary.com/efreezy/image/upload/v1444957128/uboghlrcb4hri2qv7bah.jpg" };
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

      ApiUtil.createStory(postTitle, bodyHtml, tagsArray, bannerUrl, CURRENT_USER_ID);
      this.history.pushState(null, '/');
    },

    updatePhotoUrl: function (url) {
      this.setState({ bannerImageUrl: url });
    },

    handleStoryFormClick: function () {
      $('.editable.story-content.story-body').text("");
      $('.untouched').removeClass("untouched");
    },

    render: function () {

      return (
        <div>
          <div className="story-form-container">
            Post a Story
            <br/>
            <input type="text" className="post-title story-content"
                    placeholder="Title"/>
            <br/>
            <div onClick={this.handleStoryFormClick} className="editable story-content story-body" >
              Body..
            </div>
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
      }
  });
})(this);
