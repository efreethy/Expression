var ApiUtil = {
  fetchAuthorStories: function (author_id) {
    $.ajax({
      url: '/api/users/' + author_id +'/stories',
      method: 'GET',
      dataType: 'JSON',
      data: {author_id: author_id},
      success: function (authorStories) {
        ApiActions.receiveAll(authorStories);
      }
    });
  },

  fetchSingleStory: function (author_id, story_id) {
    $.ajax({
      url: '/api/users/' + author_id + '/stories/' + story_id,
      method: 'GET',
      dataType: 'JSON',
      success: function (stories) {
        console.log(story);
        ApiActions.receiveAll(stories);
      }
    });
  },

  createStory: function (postTitle, bodyHtml) {

    $.ajax({
      type: "POST",
      url: "/api/users/"+CURRENT_USER_ID+'/stories',
      dataType: "json",
      data: {story: { title: postTitle, body: bodyHtml }},
      success: function (data) {
        console.log(data);
        ApiActions.receiveSingleStory(data);
      }
    });
  },

  fetchSingleUser: function (user_id) {

  }

};
