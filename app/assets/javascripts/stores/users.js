(function(root){

  var _singleUser;
  var _userShow;

  var _addSingleUser = function (user) {
    _singleUser = user;
  };

  var _resetUserTags = function (tags) {
    _singleUser.tag_subs = tags;
  };

  var _setUserShow = function (user) {
    _userShow = user;
  };

  var SINGLE_USER_CHANGE_EVENT = 'singleUserChangeEvent';
  var USER_SHOW_CHANGE_EVENT = 'UserShowChangeEvent';

  root.UserStore = $.extend({}, EventEmitter.prototype, {
    addUserShowChangeListener: function (cb) {
      UserStore.on(SINGLE_USER_CHANGE_EVENT, cb);
    },

    removeUserShowChangeListener: function (cb) {
      UserStore.removeListener(SINGLE_USER_CHANGE_EVENT, cb);
    },

    addSingleUserShowChangeListener: function (cb) {
        UserStore.on(USER_SHOW_CHANGE_EVENT, cb);
    },

    removeSingleUserShowChangeListener: function (cb) {
        UserStore.removeListener(USER_SHOW_CHANGE_EVENT, cb);
    },

    singleUser: function () {
      return _singleUser;
    },

    userShow: function () {
      return _userShow;
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
       case UserConstants.USER_SHOW_RECEIVED:
       _setUserShow(payload.data);
       UserStore.emit(USER_SHOW_CHANGE_EVENT);
       break;
     }
   })
  });
})(this);
