function endModal() {
    let fixedGift = document.querySelector('.fixed-gift'),
        popupForm = document.querySelector('#popup-form'),
        modalForm = document.querySelector('.modal-main-form'),
        popupGift = document.querySelector('.popup-gift');


    window.addEventListener('scroll', function() {
        if(document.documentElement.scrollTop > 11000 && fixedGift.style.display != 'none' && popupForm.style.display != 'block' && modalForm.style.display != 'block'){
            fixedGift.style.display = 'none';
            popupGift.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
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

module.exports = endModal;