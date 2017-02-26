'use strict';

(function(exports) {
  var imageSizeDec = document.querySelector('.upload-resize-controls-button-dec');
  var imageSizeInc = document.querySelector('.upload-resize-controls-button-inc');
  var imageSizeValue = document.querySelector('.upload-resize-controls-value');

  function applySizeValue(value) {
    imageSizeValue.setAttribute('value', value);
    imageSizeValue.value = value + '%';
    window.form.imagePreview.style.transform = 'scale(' + value / 100 + ')';
  }

  exports.initializeScale = function(elem, step, currentValue, adjustSizeFunc) {

    function getSizeValue(elem) {
      return +elem.value.substring(0, elem.value.indexOf('%'));
    }

    function isActivateScaling() {
      var currentSizeValue = getSizeValue(currentValue);

      if (elem === imageSizeInc && currentSizeValue <= (100-step)) {
        currentSizeValue += step;
        adjustSizeFunc(currentSizeValue);
      }

      if (elem === imageSizeDec && currentSizeValue > step) {
        currentSizeValue -= step;
        adjustSizeFunc(currentSizeValue);
      }
    }

    elem.addEventListener('click', function () {
      isActivateScaling();
    })
  }

  window.initializeScale.initializeScale(imageSizeInc, 25, imageSizeValue, applySizeValue);
  window.initializeScale.initializeScale(imageSizeDec, 25, imageSizeValue, applySizeValue);
})(this.initializeScale = {})
