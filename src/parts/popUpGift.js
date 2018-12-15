function popUpGift() {

    let fixedGift = document.querySelector('.fixed-gift'),
        popupGift = document.querySelector('.popup-gift');

    fixedGift.addEventListener('click', function () {
        fixedGift.style.display = 'none';
        popupGift.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    popupGift.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('popup-close') || e.target.classList.contains('popup-gift')){
            close();
        }

    });

    function close() {
            popupGift.style.display = 'none';
            document.body.style.overflow = '';
    }

}

module.exports = popUpGift;