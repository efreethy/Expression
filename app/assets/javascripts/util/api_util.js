var ApiUtil = {

  fetchSearchResults: function (queryText) {
    $.ajax({
      url: 'api/global_searches',
      method: 'GET',
      dataType: 'JSON',
      data: {query_text: queryText},
      success: function (results) {
        ApiActions.receiveSearchResults(results);
      }.bind(this)
    });
  },

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

  fetchTopStories: function () {
    $.ajax({
      url: '/api/users/' + CURRENT_USER_ID + '/stories/',
      method: 'GET',
      dataType: 'JSON',
      data: {type: 'fetchTopStories'},
      success: function (stories) {
        ApiActions.receiveTopStories(stories);
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
    if (typeof bannerImageUrl === "undefined") {
      bannerImageUrl = 'http://res.cloudinary.com/efreezy/image/upload/v1444957128/uboghlrcb4hri2qv7bah.jpg';
    }

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
    if (typeof user_id !== "undefined") {
    $.ajax({
      url: '/users/' + user_id,
      method: 'GET',
      dataType: 'JSON',
      success: function (user) {

        ApiActions.receiveSingleUser(user);
      }
    });
  }
  },

  fetchUserShow: function (user_id) {
    if (typeof user_id !== "undefined") {
    $.ajax({
      url: '/users/' + user_id,
      method: 'GET',
      dataType: 'JSON',
      success: function (user) {
        ApiActions.receiveSingleUserShow(user);
      }
    });
  }
  },

  updateProfImage: function (profImageUrl, user_id) {
    $.ajax({
      url: '/users/' + user_id,
      method: 'PATCH',
      dataType: 'JSON',
      data: {user: { profImageUrl: profImageUrl, currentUserId: CURRENT_USER_ID}},
      success: function (user) {
        ApiActions.receiveSingleUserShow(user);
      }
    });
  },

  fetchTag: function (tag_id) {
    $.ajax({
      url: '/api/tags/' + tag_id,
      method: 'GET',
      dataType: 'JSON',
      success: function (tag) {
        ApiActions.receiveSingleTag(tag);
      }
    });
  },

  createUserTagging: function (user_id, tag_id) {
    $.ajax({
      url: '/api/user_taggings/',
      method: 'POST',
      dataType: 'JSON',
      data: {user_id: user_id, tag_id: tag_id},
      success: function (tags) {
        ApiActions.receiveNewUserTags(tags);
      }
    });
  },

  deleteUserTagging: function (user_id, tag_id) {
    $.ajax({
      url: '/api/user_taggings/'+tag_id,
      method: 'DELETE',
      dataType: 'JSON',
      data: {user_id: user_id, tag_id: tag_id},
      success: function (tags) {
        ApiActions.receiveNewUserTags(tags);
      }
    });
  },

  deleteUserFollowing: function (follower_id, followed_id) {
    $.ajax({
      url: '/api/followings/'+follower_id,
      method: 'DELETE',
      dataType: 'JSON',
      data: {follower_id: follower_id, followed_id: followed_id},
      success: function (followers) {
        ApiActions.receiveNewFollowers(followers);
      }
    });
  },

  createUserFollowing: function (follower_id, followed_id) {
    $.ajax({
      url: '/api/followings/',
      method: 'POST',
      dataType: 'JSON',
      data: {follower_id: follower_id, followed_id: followed_id},
      success: function (followers) {
        ApiActions.receiveNewFollowers(followers);
      }
    });
  },

  deleteRecommendation: function (story_id, user_id) {
    $.ajax({
      url: '/api/recommendations/'+story_id,
      method: 'DELETE',
      dataType: 'JSON',
      data: {story_id: story_id, user_id: user_id},
      success: function (newRecommenders) {
        ApiActions.receiveNewRecommenders(newRecommenders);
      }
    });
  },

  createRecommendation: function (story_id, user_id) {
    $.ajax({
      url: '/api/recommendations/',
      method: 'POST',
      dataType: 'JSON',
      data: {story_id: story_id, user_id: user_id},
      success: function (newRecommenders) {
        ApiActions.receiveNewRecommenders(newRecommenders);
      }
    });
  },

  fetchUserFavorites: function (user_id) {
    $.ajax({
      url: "/api/users/" + user_id + "/favorites",
      method: 'GET',
      dataType: 'JSON',
      data: {user: { user_id: user_id } },
      success: function (favoriteStories) {
        ApiActions.receiveNewUserFavorites(favoriteStories);
      }
    });
  }
};
