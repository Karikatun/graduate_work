function calc() {
    let sizeVal = +document.querySelector('#size').options[0].value,
        materialVal = +document.querySelector('#material').options[0].value,
        optionsVal = +document.querySelector('#options').options[0].value,
        size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        options = document.querySelector('#options'),
        promocode = document.querySelector('.promocode'),
        totalPrice = document.querySelector('.calc-price'),
        total = 0,
        promocodeVal = 1;

    size.addEventListener('change', function () {
        sizeVal = +this.options[this.selectedIndex].value;
        sum();
    });

    material.addEventListener('change', function () {
        materialVal = +this.options[this.selectedIndex].value;
        sum();
    });

    options.addEventListener('change', function () {
        optionsVal = +this.options[this.selectedIndex].value;
        sum();
    });
    promocode.addEventListener('input', function() {
        if (promocode.value === 'IWANTPOPART'){
            promocodeVal = 0.7;            
        } else {
            promocodeVal = 1;
        }
        sum();
    });

    function sum() {
        if (sizeVal == '0' || materialVal == '0') {
            totalPrice.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
        } else {
            total = (sizeVal + materialVal + optionsVal) * promocodeVal;
            totalPrice.innerHTML = total;
        }
    }
}

module.exports = calc;