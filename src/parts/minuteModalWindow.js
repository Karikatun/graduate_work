function minuteModalWindow() {
    let popupConsult = document.querySelector('.popup-consultation'),
        popupForm = popupConsult.querySelector('#popup-form'),
        popupDesign = document.querySelector('.popup-design'),
        popupGift = document.querySelector('.popup-gift');    

    let timerId = setTimeout(() => {
        if (popupConsult.style.display == 'block' ||  popupGift.style.display == 'block' || popupDesign.style.display == 'block' || popupForm.style.display == 'block') {
            clearTimeout(timerId);
        } else {
            popupConsult.style.display = 'block';
            document.body.style.overflow = 'hidden';

        }
    }, 60000);

}

module.exports = minuteModalWindow;