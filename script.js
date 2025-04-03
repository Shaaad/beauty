const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let counter = 0;
const size = images[0].clientWidth; // Ширина одного изображения

// Начальное положение карусели
carousel.style.transform = `translateX(${-size * counter}px)`;

// Обработчики событий для кнопок
nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) return; // Останавливаемся на последнем изображении
    carousel.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carousel.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return; // Останавливаемся на первом изображении
    carousel.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carousel.style.transform = `translateX(${-size * counter}px)`;
});

// Обработчик события окончания анимации (для плавного возврата к началу/концу)
carousel.addEventListener('transitionend', () => {
    if (images[counter].id === 'lastClone') {
        carousel.style.transition = "none";
        counter = images.length - 2;
        carousel.style.transform = `translateX(${-size * counter}px)`;
    }
    if (images[counter].id === 'firstClone') {
        carousel.style.transition = "none";
        counter = images.length - counter;
        carousel.style.transform = `translateX(${-size * counter}px)`;
    }
});

// Адаптивность (обновление размера при изменении размера окна)
window.addEventListener('resize', () => {
    const newSize = images[0].clientWidth;
    carousel.style.transform = `translateX(${-newSize * counter}px)`;
});