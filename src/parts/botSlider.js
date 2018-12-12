function botSlider() {
    let slideIndex = 1,
        slides = document.querySelectorAll('.feedback-slider-item'),
        prev = document.querySelector('.main-prev-btn'),
        next = document.querySelector('.main-next-btn');


    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');


        slides[slideIndex - 1].style.display = 'block';

        if (slides[slideIndex - 1].classList.contains('fadeInLeft')) {
            slides[slideIndex - 1].classList.remove('fadeInLeft');
            slides[slideIndex - 1].classList.add('fadeInRight');
        } else {
            slides.forEach((item) => item.classList.add('animated', 'fadeInRight'));
        }
    }


    prev.addEventListener('click', () => {
        showSlides(slideIndex -= 1);
        slides[slideIndex - 1].classList.replace('fadeInRight', 'fadeInLeft');

    });

    next.addEventListener('click', () => {
        showSlides(slideIndex += 1);
    });

    setTimeout(function sliderTimer() {
        showSlides(slideIndex += 1);
        setTimeout(sliderTimer, 8000);
    });
}

module.exports = botSlider;