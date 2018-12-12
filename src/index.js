window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let popUpGift = require('./parts/popUpGift'),
        topSlider = require('./parts/topSlider'),
        botSlider = require('./parts/botSlider'),
        accordion = require('./parts/accordion');


    popUpGift();
    topSlider();
    botSlider();
    accordion();

});