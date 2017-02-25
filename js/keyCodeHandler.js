'use strict'

var keyCodeHandler = (function () {
  var ESCAPE_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  return {
    isHideEvent: function (event) {
      return event.keyCode && event.keyCode === ESCAPE_KEYCODE;
    },

    isActivateEvent: function (event) {
      return event.keyCode && event.keyCode === ENTER_KEYCODE;
    }
  }
})();
