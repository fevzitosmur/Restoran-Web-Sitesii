// slider.js

document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.review-item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let index = 0;

    function updateSlider() {
        const slideWidth = slides[0].offsetWidth + 20; // Kart genişliği + margin
        sliderContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    nextButton.addEventListener('click', function() {
        if (index < slides.length - 1) {
            index++;
            updateSlider();
        }
    });

    prevButton.addEventListener('click', function() {
        if (index > 0) {
            index--;
            updateSlider();
        }
    });

    // Initial update
    updateSlider();
});
