function popupDesign() {
    let popupDesign = document.querySelector('.popup-design');

    window.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('button-design')) {
            popupDesign.style.display = 'block';
        }
    });

    popupDesign.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('popup-close') || e.target.classList.contains('popup-design')) {
            close();
        }

    });

    function close() {
        popupDesign.style.display = 'none';
        document.body.style.overflow = '';
    }
}

module.exports = popupDesign;