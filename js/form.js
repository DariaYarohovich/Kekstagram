'use strict'

var upload = document.querySelector('.upload');
var uploadOverlay = upload.querySelector('.upload-overlay');
var uploadSelectImage = upload.querySelector('#upload-select-image');
var uploadFile = uploadSelectImage.querySelector('#upload-file');
var uploadFormCancel = upload.querySelector('.upload-form-cancel');

var filtersBlock = upload.querySelector('.upload-filter-controls');

var imageSizeDec = upload.querySelector('.upload-resize-controls-button-dec');
var imageSizeInc = upload.querySelector('.upload-resize-controls-button-inc');
var imageSizeValue = upload.querySelector('.upload-resize-controls-value');

var uploadOverlayHandler = function (event) {
  if (keyCodeHandler.isHideEvent(event)) {
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
uploadFile.addEventListener('change', function () {
  setupOverlayOpen();
  uploadFile.value = '';
});

/* close overlay form*/
uploadFormCancel.addEventListener('click', setupOverlayClose);

uploadFormCancel.addEventListener('keypress', function (event) {
  if (keyCodeHandler.isActivateEvent(event)) {
    setupOverlayClose();
  }
});

/*use filters*/
initializeFilters(filtersBlock);

/* use scaling*/

initializeScale(imageSizeInc, 25, imageSizeValue);
initializeScale(imageSizeDec, 25, imageSizeValue);
