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
      ApiUtil.createStory(postTitle, bodyHtml);
    },

    render: function () {
      return (
        <div className="landing-page-story-form">
          <input type="text" className="landing-page-post-title story-content"
                  onChange={this.onTitleChange} placeholder="Title" value={this.state.title}/>

         <div className="editable landing-page-post-body story-content"  >
            Body...
         </div>

          <br/>
          <button onClick={this.handlePublishClick} type="submit" className="btn btn-success">Publish</button>

        </div>
      );
    }

  });
})(this);
