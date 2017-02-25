'use strict';

(function (exports) {
  var ESCAPE_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  exports.isHideEvent = function (event) {
      return event.keyCode && event.keyCode === ESCAPE_KEYCODE;
    };

  exports.isActivateEvent = function (event) {
      return event.keyCode && event.keyCode === ENTER_KEYCODE;
    };

})(this.keyCodeHandler = {});
