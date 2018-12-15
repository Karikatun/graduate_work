function popupDesign() {
    let popupDesign = document.querySelector('.popup-design'),
        modalForm = popupDesign.querySelector('.modal-main-form'),
        successMes = document.querySelectorAll('.success'),
        failureMes = document.querySelectorAll('.failure');



    window.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('button-design')) {
            popupDesign.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });

    popupDesign.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('popup-close') || e.target.classList.contains('popup-design')) {
            close();
        }

    });

    function close() {
        popupDesign.style.display = 'none';
        modalForm.style.display = 'block';
        successMes.forEach((item) => item.style.display = 'none');
        failureMes.forEach((item) => item.style.display = 'none');
        document.body.style.overflow = '';
    }
}

module.exports = popupDesign;