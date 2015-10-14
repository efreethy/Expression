var ApiActions = {
  receiveAll: function(authorStories){
    AppDispatcher.dispatch({
      actionType: StoryConstants.AUTHOR_STORIES_RECEIVED,
      data: stories
    });
  },

  receiveSingleStory: function(story){
    AppDispatcher.dispatch({
      actionType: StoryConstants.STORY_CREATED,
      data: story
    });
  }
};
