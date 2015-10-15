(function (root) {

  root.StoryForm = React.createClass({

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
      ApiUtil.createStory(postTitle, bodyHtml, CURRENT_USER_ID);
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
            <div className="editable story-content story-body" >
              Body..
            </div>

              <div className='publish-tags-container'>
                <button onClick={this.handlePublishClick} type="submit" className="btn btn-success story-form-publish-btn">Publish</button>
              
              </div>
          </div>
            <TagAdder />
            </div>

        );
      }
  });
})(this);
