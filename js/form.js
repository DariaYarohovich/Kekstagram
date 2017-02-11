'use strict';

var upload = document.querySelector('.upload');
var uploadOverlay = upload.querySelector('.upload-overlay');
var uploadSelectImage = upload.querySelector('#upload-select-image');
var uploadFile = uploadSelectImage.querySelector('#upload-file');
var uploadFormCancel = upload.querySelector('.upload-form-cancel');

var imagePreview = upload.querySelector('.filter-image-preview');
var filtersBlock = upload.querySelector('.upload-filter-controls');
var filters = upload.querySelectorAll('[name=upload-filter]');

var imageSizeDec = upload.querySelector('.upload-resize-controls-button-dec');
var imageSizeInc = upload.querySelector('.upload-resize-controls-button-inc');
var imageSizeValue = upload.querySelector('.upload-resize-controls-value');

/* Созд. функции доб-я/удаления класса invisible*/
function showElement(elem) {
  elem.classList.remove('invisible');
}
function hideElement(elem) {
  elem.classList.add('invisible');
}

/* show framing form*/
uploadFile.onchange = function () {
  showElement(uploadOverlay);
  hideElement(uploadSelectImage);
};

/* close framing form*/
uploadFormCancel.addEventListener('click', function () {
  showElement(uploadSelectImage);
  hideElement(uploadOverlay);
});

/* use filter*/
function getFilterName(filter) {
  var filterName = filter.id.replace('upload-', '');
  return filterName;
}

filtersBlock.addEventListener('click', function () {
  for (var i = 0; i < filters.length; i++) {
    if (filters[i].checked) {
      imagePreview.classList.toggle(getFilterName(filters[i]));
    }
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
