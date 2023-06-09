'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//querySelectorAll returns a array of list of all element of class named
const btnShowModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}

for (let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener('click', openModal);

    btnCloseModal.addEventListener('click', closeModal);

    overlay.addEventListener('click', closeModal);
}

//keypress event handler

document.addEventListener('keydown', function (event) {
    if (!modal.classList.contains('hidden') && event.key === 'Escape') {
        closeModal();
    }
})