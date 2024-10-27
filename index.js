const burgerBtn = document.querySelector('.burger');
const closeBtn = document.querySelector('.modal__close');
const header = document.querySelector('.header');
const headerLinks = document.querySelectorAll('.header__link');

burgerBtn.addEventListener('click', () => {
	header.classList.toggle('header--open');
});

headerLinks.forEach((link) => {
	link.addEventListener('click', () => {
		header.classList.remove('header--open');
	});
});

const heroBg = document.querySelector('.hero__img');
window.addEventListener('scroll', () => {
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

	// Получаем максимальное значение скролла
	const maxScroll = scrollHeight - clientHeight;

	// Вычисляем масштаб
	const power = 1.2;
	const scale = 1 + (scrollTop / maxScroll) * power;

	// Устанавливаем масштаб
	heroBg.style.transform = `scale(${scale})`;
});

// document.addEventListener('DOMContentLoaded', () => {
// 	const projectCards = document.querySelectorAll('.project-card');
// 	const modal = document.querySelector('.modal');
// 	const closeBtn = document.querySelector('.modal__close');

// 	closeBtn.addEventListener('click', () => modal.classList.remove('modal--open'));

// 	projectCards.forEach(card => {
// 		card.addEventListener('click', () => {
// 			const targetId = card.getAttribute('data-modal-id').slice(1);
// 			document.querySelectorAll('.modal__item').forEach(item => item.classList.remove('modal__item--open'));

// 			modal.classList.add('modal--open');
// 			const targetItem = document.getElementById(targetId);
// 			if (targetItem) targetItem.classList.add('modal__item--open');
// 		});
// 	});
// });

// // Swiper
// const swiper = new Swiper('.swiper', {
// 	direction: 'horizontal',
// 	loop: true,
// 	centeredSlides: true,
// 	pagination: {
// 		el: '.swiper-pagination',
// 	},
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	}
// });
