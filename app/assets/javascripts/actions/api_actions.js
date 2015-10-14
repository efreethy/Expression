var ApiActions = {
  receiveAll: function(authorStories){
    AppDispatcher.dispatch({
      actionType: StoryConstants.AUTHOR_STORIES_RECEIVED,
      data: stories
    });
  }
};
