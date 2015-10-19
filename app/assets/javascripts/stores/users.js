(function(root){

  var _singleUser;

  var _addSingleUser = function (user) {
    _singleUser = user;
  };

  var _resetUserTags = function (tags) {
    _singleUser.tag_subs = tags;
  };



  var SINGLE_USER_CHANGE_EVENT = 'singlUserChangeEvent';

  root.UserStore = $.extend({}, EventEmitter.prototype, {
    addUserShowChangeListener: function (cb) {
      UserStore.on(SINGLE_USER_CHANGE_EVENT, cb);
    },

    removeUserShowChangeListener: function (cb) {
      UserStore.removeListener(SINGLE_USER_CHANGE_EVENT, cb);
    },

    singleUser: function () {
      return _singleUser;
    },

    dispatcherID: AppDispatcher.register(function(payload) {
     switch (payload.actionType) {
       case UserConstants.USER_RECEIVED:
       _addSingleUser(payload.data);
       UserStore.emit(SINGLE_USER_CHANGE_EVENT);
       break;
       case UserConstants.NEW_TAGS_RECEIVED:
       _resetUserTags(payload.data);
       UserStore.emit(SINGLE_USER_CHANGE_EVENT);
       break;
     }
   })
  });
})(this);
