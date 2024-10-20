const burgerBtn = document.querySelector('.burger');
const closeBtn = document.querySelector('.modal__close');
const hero = document.querySelector('.hero');

burgerBtn.addEventListener('click', () => {
	hero.classList.toggle('hero--open');
});



document.addEventListener('DOMContentLoaded', () => {
	const projectCards = document.querySelectorAll('.project-card');
	const modal = document.querySelector('.modal');
	const closeBtn = document.querySelector('.modal__close');

	closeBtn.addEventListener('click', () => modal.classList.remove('modal--open'));

	projectCards.forEach(card => {
		card.addEventListener('click', () => {
			const targetId = card.getAttribute('data-modal-id').slice(1);
			document.querySelectorAll('.modal__item').forEach(item => item.classList.remove('modal__item--open'));
			
			modal.classList.add('modal--open');
			const targetItem = document.getElementById(targetId);
			if (targetItem) targetItem.classList.add('modal__item--open');
		});
	});
});

// Swiper
const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	centeredSlides: true,
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});