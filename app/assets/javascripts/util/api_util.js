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
      success: function (story) {
        ApiActions.receiveSingleStory(story);
      }
    });
  },

  createStory: function (postTitle, bodyHtml, tagsArray, bannerImageUrl) {

    $.ajax({
      type: "POST",
      url: "/api/users/"+CURRENT_USER_ID+'/stories',
      dataType: "json",
      data: {story: { title: postTitle, body: bodyHtml, tags: tagsArray, bannerImageUrl: bannerImageUrl}},
      success: function (data) {
        ApiActions.receiveSingleStory(data);

      }
    });
  },

  fetchSingleUser: function (user_id) {

    $.ajax({
      url: '/users/' + user_id,
      method: 'GET',
      dataType: 'JSON',
      success: function (user) {

        ApiActions.receiveSingleUser(user);
      }
    });
  },

  updateProfImage: function (profImageUrl, user_id) {
    $.ajax({
      url: '/users/' + user_id,
      method: 'PATCH',
      dataType: 'JSON',
      data: {user: { profImageUrl: profImageUrl, currentUserId: CURRENT_USER_ID}},
      success: function (user) {
        ApiActions.receiveSingleUser(user);
      }
    });
  },

  fetchTag: function (tag_id) {
    $.ajax({
      url: '/api/tags/' + tag_id,
      method: 'GET',
      dataType: 'JSON',
      success: function (tag) {
        console.log(tag);
        ApiActions.receiveSingleTag(tag);
      }
    });
  },

};
