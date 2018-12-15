function minuteModalWindow() {
    let popupConsult = document.querySelector('.popup-consultation'),
        popupDesign = document.querySelector('.popup-design'),
        popupGift = document.querySelector('.popup-gift');    

    let timerId = setTimeout(() => {
        if (popupConsult.style.display == 'block' ||  popupGift.style.display == 'block' || popupDesign.style.display == 'block') {
            clearTimeout(timerId);
        } else {
            popupConsult.style.display = 'block';
        }
    }, 60000);

}

module.exports = minuteModalWindow;