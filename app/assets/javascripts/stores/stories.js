(function(root){
  var _authorStories = [];
  var _singleAuthorStory;

  var _resetAuthorStories = function (stories) {
    _authorStories = stories;
  };


  var _addAuthorStory = function (story) {
    _singleAuthorStory = story;
  };

  var AUTHOR_STORIES_INDEX_CHANGE_EVENT = 'authorStoriesIndexChange';
  var SINGLE_AUTHOR_STORY_CHANGE_EVENT = 'singleAuthorStoryChange';

  root.StoryStore = $.extend({}, EventEmitter.prototype, {
    addAuthorStoriesIndexChangeListener: function (cb) {
      StoryStore.on(AUTHOR_STORIES_INDEX_CHANGE_EVENT, cb);
    },

    removeAuthorStoriesIndexChangeListener: function (cb) {
      StoryStore.removeListener(AUTHOR_STORIES_INDEX_CHANGE_EVENT, cb);
    },

    addAuthorStoryShowChangeListener: function (cb) {
      StoryStore.on(SINGLE_AUTHOR_STORY_CHANGE_EVENT, cb);
    },

    removeAuthorStoryShowChangeListener: function (cb) {
      StoryStore.removeListener(SINGLE_AUTHOR_STORY_CHANGE_EVENT, cb);
    },


    allAuthorStories: function(){
      return _authorStories.slice(0);
    },

    singleAuthorStory: function () {
      return _singleAuthorStory;
    },

    dispatcherID: AppDispatcher.register(function(payload) {
     switch (payload.actionType) {
       case StoryConstants.AUTHOR_STORIES_RECEIVED:
       _resetAuthorStories(payload.data);
       StoryStore.emit(AUTHOR_STORIES_INDEX_CHANGE_EVENT);
       break;
       case StoryConstants.STORY_RECIEVED:
       _addAuthorStory(payload.data);
       StoryStore.emit(SINGLE_AUTHOR_STORY_CHANGE_EVENT);
       break;
     }
   })
  });
})(this);
