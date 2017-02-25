'use strict'

window.initializeFilters = function (elem) {

  var imagePreview = upload.querySelector('.filter-image-preview');

  function getFilterName(elem) {
    var filterName = elem.id.replace('upload-', '');
    return filterName;
  };

  function getTargetInput(event) {
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
  };

  elem.addEventListener('click', function (event) {
    applyFilter(event);
  });

  elem.addEventListener('keydown', function (event) {
    if (keyCodeHandler.isActivateEvent(event)) {
      applyFilter(event);
    }
  });
}

