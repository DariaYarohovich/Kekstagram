'use strict'

var upload = document.querySelector('.upload')
var uploadOverlay = upload.querySelector('.upload-overlay');
var uploadSelectImage = upload.querySelector('#upload-select-image');
var uploadFile = uploadSelectImage.querySelector('#upload-file');
var uploadFormCancel = upload.querySelector('.upload-form-cancel');

uploadOverlay.classList.add('invisible');
uploadSelectImage.classList.remove('invisible');

/*show framing form*/
uploadFile.onchange = function() {
    uploadOverlay.classList.remove('invisible');
    uploadSelectImage.classList.add('invisible');
}
/*close framing form*/
uploadFormCancel.addEventListener('click', function() {
    uploadSelectImage.classList.remove('invisible');
    uploadOverlay.classList.add('invisible');
})
/*use filter*/
/*use scaling*/