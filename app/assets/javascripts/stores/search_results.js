(function(root){

  var _results = [];

  var _setResults = function (results) {
    _results = results;
  };

  var SEARCH_RESULTS_CHANGE_EVENT = 'searchResultsChangeEvent';

  root.SearchResultsStore = $.extend({}, EventEmitter.prototype, {
    addSearchResultsChangeListener: function (cb) {
      SearchResultsStore.on(SEARCH_RESULTS_CHANGE_EVENT , cb);
    },

    removeSearchResultsChangeListener: function (cb) {
      SearchResultsStore.removeListener(SEARCH_RESULTS_CHANGE_EVENT , cb);
    },

    searchResults: function () {
      return _results;
    },

    dispatcherID: AppDispatcher.register(function(payload) {
     switch (payload.actionType) {
       case SearchResultsConstants.SEARCH_RESULTS_RECEIVED:
       _setResults(payload.data);
       SearchResultsStore.emit(SEARCH_RESULTS_CHANGE_EVENT);
       break;
     }
   })
  });
})(this);
