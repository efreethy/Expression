(function (root) {


  root.StoryForm = React.createClass({
    mixins: [ReactRouter.History],

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

      ApiUtil.createStory(postTitle, bodyHtml, tagsArray, CURRENT_USER_ID);
      this.history.pushState(null, '/');
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
              <button onClick={this.handlePublishClick} type="submit"
              className="btn btn-success story-form-publish-btn">Publish</button>
            </div>
          </div>

          <TagAdder />
         </div>

        );
      }
  });
})(this);
