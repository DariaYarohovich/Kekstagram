'use strict';

(function (exports) {
  var upload = document.querySelector('.upload');
  var uploadOverlay = upload.querySelector('.upload-overlay');
  var uploadSelectImage = upload.querySelector('#upload-select-image');
  var uploadFile = uploadSelectImage.querySelector('#upload-file');
  var uploadFormCancel = upload.querySelector('.upload-form-cancel');
  exports.imagePreview = upload.querySelector('.filter-image-preview');

  var uploadOverlayHandler = function (event) {
    if (window.keyCodeHandler.isHideEvent(event)) {
      window.form.hideElement(uploadOverlay);
      window.form.showElement(uploadSelectImage);
    }
  };

  var setupOverlayOpen = function () {
    window.form.showElement(uploadOverlay);
    window.form.hideElement(uploadSelectImage);
    document.addEventListener('keydown', uploadOverlayHandler);
    uploadOverlay.setAttribute('aria-hidden', false);
  };

  var setupOverlayClose = function () {
    window.form.showElement(uploadSelectImage);
    window.form.hideElement(uploadOverlay);
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
    if (window.keyCodeHandler.isActivateEvent(event)) {
      setupOverlayClose();
    }
  });

  /* Созд. функции доб-я/удаления класса invisible*/
  exports.showElement = function(elem) {
    elem.classList.remove('invisible');
  }

  exports.hideElement = function(elem) {
    elem.classList.add('invisible');
  }
})(this.form = {})
