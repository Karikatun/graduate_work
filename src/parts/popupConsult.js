function popupConsult() {
    let popupConsult = document.querySelector('.popup-consultation'),
        popupForm = document.querySelectorAll('#popup-form'),
        successMes = document.querySelectorAll('.success'),
        failureMes = document.querySelectorAll('.failure');



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

        function unblock(form) {
            if (form.style.display = 'none') {
                form.style.display = '';
            }
            successMes.forEach((item) => item.style.display = 'none');
            failureMes.forEach((item) => item.style.display = 'none');
        }
        unblock(popupForm);
    }

}

module.exports = popupConsult;