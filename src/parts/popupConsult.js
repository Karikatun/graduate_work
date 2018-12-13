function popupConsult() {
    let popupConsult = document.querySelector('.popup-consultation');

    window.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('button-consultation')) {
            popupConsult.style.display = 'block';
        }
    });

    popupConsult.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('popup-close') || e.target.classList.contains('popup-consultation')) {
            close();
        }

    });

    function close() {
        popupConsult.style.display = 'none';
        document.body.style.overflow = '';
    }

}

module.exports = popupConsult;