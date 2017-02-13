'use strict';

var upload = document.querySelector('.upload');
var uploadOverlay = upload.querySelector('.upload-overlay');
var uploadSelectImage = upload.querySelector('#upload-select-image');
var uploadFile = uploadSelectImage.querySelector('#upload-file');
var uploadFormCancel = upload.querySelector('.upload-form-cancel');

var imagePreview = upload.querySelector('.filter-image-preview');
var filtersBlock = upload.querySelector('.upload-filter-controls');

var imageSizeDec = upload.querySelector('.upload-resize-controls-button-dec');
var imageSizeInc = upload.querySelector('.upload-resize-controls-button-inc');
var imageSizeValue = upload.querySelector('.upload-resize-controls-value');

var ENTER_KEYCODE = 13;
var ESCAPE_KEYCODE = 27;

var isActivateEvent = function (event) {
  return event.keyCode && event.keyCode === ENTER_KEYCODE;
};

var isHideEvent = function (event) {
  return event.keyCode && event.keyCode === ESCAPE_KEYCODE;
};

var uploadOverlayHandler = function (event) {
  if (isHideEvent(event)) {
    hideElement(uploadOverlay);
    showElement(uploadSelectImage);
  }
};

/* Созд. функции доб-я/удаления класса invisible*/
function showElement(elem) {
  elem.classList.remove('invisible');
}

function hideElement(elem) {
  elem.classList.add('invisible');
}

var setupOverlayOpen = function () {
  showElement(uploadOverlay);
  hideElement(uploadSelectImage);
  document.addEventListener('keydown', uploadOverlayHandler);
  uploadOverlay.setAttribute('aria-hidden', false);
};

var setupOverlayClose = function () {
  showElement(uploadSelectImage);
  hideElement(uploadOverlay);
  document.removeEventListener('keydown', uploadOverlayHandler);
  uploadOverlay.setAttribute('aria-hidden', true);
};

/* show overlay form*/
uploadFile.onchange = function () {
  setupOverlayOpen();
  uploadFile.value = '';
};

/* close overlay form*/
uploadFormCancel.addEventListener('click', setupOverlayClose);

uploadFormCancel.addEventListener('keypress', function (event) {
  if (isActivateEvent(event)) {
    setupOverlayClose();
  }
});

/* use filter*/
function getFilterName(elem) {
  var filterName = elem.id.replace('upload-', '');
  return filterName;
}

var getTargetInput = function (event) {
  var targetElem = event.target;

  while (!targetElem.name && targetElem.name !== 'upload-filter') {
    if (!targetElem.previousElementSibling) {
      targetElem = targetElem.parentElement;
    } else {
      targetElem = targetElem.previousSibling;
    }
  }

  return targetElem;
};

function applyFilter(event) {
  var newFilter = getFilterName(getTargetInput(event));
  imagePreview.className = 'filter-image-preview';
  imagePreview.classList.add(newFilter);
}

filtersBlock.addEventListener('click', function (event) {
  applyFilter(event);
});

filtersBlock.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    applyFilter(event);
  }
});

/* use scaling*/
function getValue(elem) {
  return +elem.value.substring(0, elem.value.indexOf('%'));
}

imageSizeInc.addEventListener('click', function () {
  var value = getValue(imageSizeValue);
  if (value < 100) {
    value += 25;
    imageSizeValue.value = value + '%';
    imagePreview.style.transform = 'scale(' + value / 100 + ')';
  }
});

imageSizeDec.addEventListener('click', function () {
  var value = getValue(imageSizeValue);
  if (value > 25) {
    value -= 25;
    imageSizeValue.value = value + '%';
    imagePreview.style.transform = 'scale(' + value / 100 + ')';
  }
});
