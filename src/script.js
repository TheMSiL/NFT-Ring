//slider//

const firstSlide = document.getElementById('first-slide');
const lastSlide = document.getElementById('last-slide');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', () => {
	lastSlide.style.marginRight = '0';
	firstSlide.style.marginLeft = '915px';
});

nextBtn.addEventListener('click', () => {
	firstSlide.style.marginLeft = '0';
	lastSlide.style.marginRight = '915px';
});

//slider//

//burger//

const burger = document.getElementById('burger');
const span1 = document.getElementById('burger-first');
const span2 = document.getElementById('burger-second');
const span3 = document.getElementById('burger-third');
const menu = document.getElementById('burger-menu');

burger.addEventListener('click', () => {
	burger.classList.toggle('clicked');

	if (burger.classList.contains('clicked')) {
		menu.style.display = 'flex';
		span2.style.display = 'none';
		span1.style.transform = 'rotate(45deg)';
		span1.style.marginBottom = '-5px';
		span3.style.transform = 'rotate(-45deg)';
	} else {
		menu.style.display = 'none';
		span2.style.display = 'block';
		span1.style.transform = 'rotate(0deg)';
		span1.style.marginBottom = '0';
		span3.style.transform = 'rotate(0deg)';
	}
});

//burger//
