'use strict';

(function () {
  var filtersBlock = document.querySelector('.upload-filter-controls');

  function applyFilter(newFilterName) {
    window.form.imagePreview.className = 'filter-image-preview';
    window.form.imagePreview.classList.add(newFilterName);
  };

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

  function initializeFilters(elem, applyNewFilterFunction) {

    elem.addEventListener('click', function (event) {
      var newFilter = getFilterName(getTargetInput(event));
      applyNewFilterFunction(newFilter);
    });

    elem.addEventListener('keydown', function (event) {
      if (window.keyCodeHandler.isActivateEvent(event)) {
        var newFilter = getFilterName(getTargetInput(event));
        applyNewFilterFunction(newFilter);
      }
    });
  }

  initializeFilters(filtersBlock, applyFilter);

})()

