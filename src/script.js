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
