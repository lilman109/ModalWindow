'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const onButtonClicked = (txt) => {
	console.log(`${txt} button clicked!`);
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModal = () => {
	if (modal.classList.contains('hidden')) return;
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

const onEnterKeyPressed = (event) => {
	if (event.key === 'Escape') {
		closeModal();
	}
};

btnsOpenModal.forEach((btn) => {
	btn.addEventListener('click', () => onButtonClicked(btn.textContent));
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', (key) => onEnterKeyPressed(key));
