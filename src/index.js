window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let popUpGift = require('./parts/popUpGift'),
        topSlider = require('./parts/topSlider'),
        botSlider = require('./parts/botSlider'),
        accordion = require('./parts/accordion'),
        popupConsult = require('./parts/popupConsult');


    popUpGift();
    topSlider();
    botSlider();
    accordion();
    popupConsult();
});