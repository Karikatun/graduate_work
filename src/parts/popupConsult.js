function popupConsult() {
    let popupConsult = document.querySelector('.popup-consultation'),
        popupForm = popupConsult.querySelector('#popup-form'),
        successMes = document.querySelectorAll('.success'),
        failureMes = document.querySelectorAll('.failure');



    window.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('button-consultation')) {
            popupConsult.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });

    popupConsult.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('popup-close') || e.target.classList.contains('popup-consultation')) {
            close();
        }

    });

    function close() {
        popupConsult.style.display = 'none';
        popupForm.style.display = 'block';
        successMes.forEach((item) => item.style.display = 'none');
        failureMes.forEach((item) => item.style.display = 'none');
        document.body.style.overflow = '';
    }
}

module.exports = popupConsult;