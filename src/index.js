window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let popUpGift = require('./parts/popUpGift'),
        topSlider = require('./parts/topSlider'),
        botSlider = require('./parts/botSlider'),
        accordion = require('./parts/accordion'),
        popupConsult = require('./parts/popupConsult'),
        popupDesign = require('./parts/popupDesign'),
        stylesBlock = require('./parts/stylesBlock'),
        calc = require('./parts/calc');


    popUpGift();
    topSlider();
    botSlider();
    accordion();
    popupConsult();
    popupDesign();
    stylesBlock();
    calc();
});