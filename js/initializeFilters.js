'use strict';

(function () {
  var filtersBlock = document.querySelector('.upload-filter-controls');

  function initializeFilters(elem) {

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
      window.form.imagePreview.className = 'filter-image-preview';
      window.form.imagePreview.classList.add(newFilter);
    };

    elem.addEventListener('click', function (event) {
      applyFilter(event);
    });

    elem.addEventListener('keydown', function (event) {
      if (window.keyCodeHandler.isActivateEvent(event)) {
        applyFilter(event);
      }
    });
  }

  initializeFilters(filtersBlock);

})()

