function mainForm() {
    let mainForm = document.querySelector('.main-main-form'),
        commentText = document.querySelectorAll('.input-text'),
        name = document.querySelectorAll('input[type="name"]');

    function sendForm(form) {
        let message = {
            loading: 'Загрузка...',
            succsess: 'Спасибо! Скоро мы с вами свяжемся!',
            failure: 'Что-то пошло не так...'
        };

        let input = form.querySelectorAll('input'),
        comment = form.querySelectorAll('input-text'),
        statusMessage = document.createElement('div');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            form.appendChild(statusMessage);
            let formData = new FormData(form),
                obj = {};

            formData.forEach(function (value, key) {
                obj[key] = value;
            });

            let json = JSON.stringify(obj);

            function postData(data) {
                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'mailer/smart.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                    request.onreadystatechange = () => {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    };
                    request.send(data);
                });
            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
                setTimeout(() => {
                    statusMessage.innerHTML = '';
                }, 3000);
                comment.innerHTML = '';
            }

            postData(json)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.succsess)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);

        });
    }
    sendForm(mainForm);

    commentText.forEach(function (item) {
        item.onkeyup = function () {
            return this.value = this.value.replace(/[^а-я,.? ]/gim, '');
        };
    });

    name.forEach(function (item) {
        item.onkeyup = function () {
            return this.value = this.value.replace(/[^а-я-]/gim, '');
        };
    });

    
}


module.exports = mainForm;