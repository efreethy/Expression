(function(root){

  var _singleTag;

  var _addSingleTag = function (tag) {
    _singleTag = tag;
  };

  var SINGLE_TAG_CHANGE_EVENT = 'singleTagChangeEvent';

  root.TagStore = $.extend({}, EventEmitter.prototype, {
    addTagShowChangeListener: function (cb) {
      TagStore.on(SINGLE_TAG_CHANGE_EVENT, cb);
    },

    removeTagShowChangeListener: function (cb) {
      TagStore.removeListener(SINGLE_TAG_CHANGE_EVENT, cb);
    },

    singleTag: function () {
      return _singleTag;
    },

    dispatcherID: AppDispatcher.register(function(payload) {
     switch (payload.actionType) {
       case TagConstants.TAG_RECEIVED:
       _addSingleTag(payload.data);
       TagStore.emit(SINGLE_TAG_CHANGE_EVENT);
       break;
     }
   })
  });
})(this);
