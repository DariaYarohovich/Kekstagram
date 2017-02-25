var initializeScale = function (elem, step, currentValue) {

  var imagePreview = upload.querySelector('.filter-image-preview');

  function getSizeValue(elem) {
    return +elem.value.substring(0, elem.value.indexOf('%'));
  }

  function applySizeValue(value) {
    imageSizeValue.setAttribute('value', value);
    imageSizeValue.value = value + '%';
    imagePreview.style.transform = 'scale(' + value / 100 + ')';
  }

  function isActivateScaling() {
    var currentSizeValue = getSizeValue(currentValue);

    if (elem === imageSizeInc && currentSizeValue <= (100-step)) {
      currentSizeValue += step;
      applySizeValue(currentSizeValue);
    }

    if (elem === imageSizeDec && currentSizeValue > step) {
      currentSizeValue -= step;
      applySizeValue(currentSizeValue);
    }
  }

  elem.addEventListener('click', function () {
    isActivateScaling();
  })
}
