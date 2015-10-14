(function(root){
  var _stories = [];
  var _resetAuthorStories = function (stories) {

    _stories = stories;
  };

  var CHANGE_EVENT = 'change';

  root.StoryStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _stories.slice(0);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
     switch (payload.actionType) {
       case StoryConstants.AUTHOR_STORIES_RECEIVED:
       _resetAuthorStories(payload.data);
       StoryStore.emit(CHANGE_EVENT);
       break;
     }
   })
  });
})(this);
