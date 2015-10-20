var ApiActions = {
  receiveAll: function(authorStories){
    AppDispatcher.dispatch({
      actionType: StoryConstants.AUTHOR_STORIES_RECEIVED,
      data: authorStories
    });
  },

  receiveSingleStory: function(story){
    AppDispatcher.dispatch({
      actionType: StoryConstants.STORY_RECIEVED,
      data: story
    });
  },

 receiveSingleUser: function (user) {
   AppDispatcher.dispatch({
     actionType: UserConstants.USER_RECEIVED,
     data: user
   });
  },

 receiveSingleUserShow: function (user) {
   AppDispatcher.dispatch({
     actionType: UserConstants.USER_SHOW_RECEIVED,
     data: user
   });
  },

 receiveSingleTag: function (tag) {
   AppDispatcher.dispatch({
     actionType: TagConstants.TAG_RECEIVED,
     data: tag
   });
 },

 receiveNewUserTags: function (tags) {
   AppDispatcher.dispatch({
     actionType: UserConstants.NEW_TAGS_RECEIVED,
     data: tags
   });
 }
};
