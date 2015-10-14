(function(root){
  var _authorStories = [];
  var _resetAuthorStories = function (stories) {

    _authorStories = stories;
  };


  var _addAuthorStory = function (story) {
    _authorStories.push(story);
  };

  var AUTHOR_STORIES_INDEX_CHANGE_EVENT = 'authorStoriesIndexChange';
  var SINGLE_AUTHOR_STORY_CHANGE_EVENT = 'singleAuthorStoryChange';

  root.StoryStore = $.extend({}, EventEmitter.prototype, {
    addAuthorStoriesIndexChangeListener: function (cb) {
      StoryStore.on(AUTHOR_STORIES_INDEX_CHANGE_EVENT, cb);
    },

    allAuthorStories: function(){
      return _authorStories.slice(0);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
     switch (payload.actionType) {
       case StoryConstants.AUTHOR_STORIES_RECEIVED:
       _resetAuthorStories(payload.data);
       StoryStore.emit(AUTHOR_STORIES_INDEX_CHANGE_EVENT);
       break;
       case StoryConstants.STORY_CREATED:
       _addAuthorStory(payload.data);
       StoryStore.emit(SINGLE_AUTHOR_STORY_CHANGE_EVENT);
       break;
     }
   })
  });
})(this);
