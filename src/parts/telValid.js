function telValid(){

    let validate = (input, regex) => {
        let value = input.value;
        input.addEventListener('input', function (e) {
            let newValue = e.target.value;
            if (newValue.match(regex)) {
                input.value = value;
                return;
            }
            value = newValue;
        });
    };
    
    let telInput = document.querySelectorAll('input[type="tel"]');
    telInput.forEach(function (input) {

        
        validate(input, /[^(+){1}\d{11}]/);

        input.addEventListener('click', () => {
            if (input.value.length < 3) {
                input.value = "+";
            }        
        });

        input.addEventListener('blur', () => {
            if (input.value.length < 3) {
                input.value = "";
            }
        });

        input.addEventListener('keydown', (e) => {
            let curLen = input.value.length;

            if (input.value.length < 2 && e.keyCode == 8) e.preventDefault();
            if (curLen == 0) input.value = "+";
        });
    });
}

module.exports = telValid;