const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.btn--open-modal');
const btnCloseModal = document.querySelectorAll('.btn--close-modal');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Open modal when "Login" button is clicked
btnOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// Close modal when "X" or "Back" button is clicked
btnCloseModal.forEach(btn => btn.addEventListener('click', closeModal));
overlay.addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
