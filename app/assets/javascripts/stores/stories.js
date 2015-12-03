(function(root){
  var _authorStories = [];
  var _singleAuthorStory;
  var _topStories = [];

  var _setFavoriteStories = function (stories) {
    _favoriteStories = stories;
  };

  var _resetAuthorStories = function (stories) {
    _authorStories = stories;
  };

  var _setNewRecommenders = function (newRecommenders) {
    if (typeof newRecommenders === "object") {
    _singleAuthorStory.recommenders = newRecommenders.recommenders;
  } else {
    _singleAuthorStory.recommenders = newRecommenders.recommenders;
  }
  };

  var _setTopStories = function (topStories) {
    _topStories = topStories;
  };

  var _addAuthorStory = function (story) {
    _singleAuthorStory = story;
  };

  var AUTHOR_STORIES_INDEX_CHANGE_EVENT = 'authorStoriesIndexChange';
  var SINGLE_AUTHOR_STORY_CHANGE_EVENT = 'singleAuthorStoryChange';
  var TOP_STORY_CHANGE_EVENT = 'topStoryChangeEvent';
  var FAVORITE_STORIES_CHANGE_EVENT = 'favoriteStoriesChangeEvent';

  root.StoryStore = $.extend({}, EventEmitter.prototype, {
    addAuthorStoriesIndexChangeListener: function (cb) {
      StoryStore.on(AUTHOR_STORIES_INDEX_CHANGE_EVENT, cb);
    },

    removeAuthorStoriesIndexChangeListener: function (cb) {
      StoryStore.removeListener(AUTHOR_STORIES_INDEX_CHANGE_EVENT, cb);
    },

    addFavoriteStoriesIndexChangeListener: function (cb) {
      StoryStore.on(FAVORITE_STORIES_CHANGE_EVENT, cb);
    },

    removeFavoriteStoriesIndexChangeListener: function (cb) {
      StoryStore.removeListener(FAVORITE_STORIES_CHANGE_EVENT, cb);
    },

    addAuthorStoryShowChangeListener: function (cb) {
      StoryStore.on(SINGLE_AUTHOR_STORY_CHANGE_EVENT, cb);
    },

    removeAuthorStoryShowChangeListener: function (cb) {
      StoryStore.removeListener(SINGLE_AUTHOR_STORY_CHANGE_EVENT, cb);
    },

    addTopStoryChangeListener: function (cb) {
      StoryStore.on(TOP_STORY_CHANGE_EVENT, cb);
    },

    removeTopStoryChangeListener: function (cb) {
      StoryStore.removeListener(TOP_STORY_CHANGE_EVENT, cb);
    },

    allAuthorStories: function(){
      return _authorStories.slice(0);
    },

    allFavoriteStories: function(){
      return _favoriteStories.slice(0);
    },

    singleAuthorStory: function () {
      return _singleAuthorStory;
    },

    topStories: function () {
      return _topStories;
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
       case StoryConstants.NEW_RECOMMENDERS_RECEIVED:
       _setNewRecommenders(payload.data);
       StoryStore.emit(SINGLE_AUTHOR_STORY_CHANGE_EVENT);
       break;
       case StoryConstants.TOP_STORIES_RECEIVED:
       _setTopStories(payload.data);
       StoryStore.emit(TOP_STORY_CHANGE_EVENT);
       break;
       case StoryConstants.NEW_FAVORITE_STORIES_RECEIVED:
       _setFavoriteStories(payload.data);
       StoryStore.emit(FAVORITE_STORIES_CHANGE_EVENT);
       break;
     }
   })
  });
})(this);
