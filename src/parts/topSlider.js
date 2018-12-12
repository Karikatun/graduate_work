function topSlider(){
    let slideIndex = 0,
        sliderMain = document.querySelector('.main-slider'),
        slides = sliderMain.querySelectorAll('.main-slider-item');

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

        slides.forEach((item) => item.classList.add('animated', 'fadeInDown'));
    }

    setTimeout(function sliderTimer(){
        showSlides(slideIndex += 1);
        setTimeout(sliderTimer, 4000);
    });
}

module.exports = topSlider;