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
  }
};
