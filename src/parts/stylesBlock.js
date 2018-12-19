function stylesBlock() {
    let stylesBlock = document.querySelectorAll('.hidden-block'),
        buttonStyles = document.querySelector('.button-styles');

    window.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('button-styles')){
            for (let i = 0; i < stylesBlock.length; i++){
                let img = stylesBlock[i].querySelector('img'),
                    block = stylesBlock[i].querySelector('.styles-block');                
                stylesBlock[i].setAttribute('style', 'display:inline-block !important');
                stylesBlock[i].style.width = '292.5px';
                stylesBlock[i].style.heght = '373px';
                stylesBlock[i].style.paddingLeft = '15px';
                stylesBlock[i].style.paddingRight = '15px';
                block.style.position = 'relative';
                img.style.heght = '214.0px';
                img.style.width = '153px';
            }
            buttonStyles.style.display = 'none';
        }
    });
}

module.exports = stylesBlock;