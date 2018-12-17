window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let popUpGift = require('./parts/popUpGift'),
        topSlider = require('./parts/topSlider'),
        botSlider = require('./parts/botSlider'),
        accordion = require('./parts/accordion'),
        popupConsult = require('./parts/popupConsult'),
        popupDesign = require('./parts/popupDesign'),
        stylesBlock = require('./parts/stylesBlock'),
        calc = require('./parts/calc'),
        mainForm = require('./parts/mainForm'),
        modalForm = require('./parts/modalForm'),
        telValid = require('./parts/telValid'),
        minuteDelayPopup = require('./parts/minuteModalWindow.js'),
        endModal = require('./parts/endModalWindow.js'),
        blockFilter = require('./parts/blockFilter'),
        sizesWrapper = require('./parts/sizesWrapper'),
        burgerMenu = require('./parts/burgerMenu');

    popUpGift();
    topSlider();
    botSlider();
    accordion();
    popupConsult();
    popupDesign();
    stylesBlock();
    calc();
    mainForm();
    modalForm();
    telValid();
    minuteDelayPopup();
    endModal();
    blockFilter();
    sizesWrapper();
    burgerMenu();
});