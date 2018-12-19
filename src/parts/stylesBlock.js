function stylesBlock() {
    let stylesBlock = document.querySelectorAll('.hidden-block'),
        buttonStyles = document.querySelector('.button-styles');

    window.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('button-styles')){
            for (let i = 0; i < stylesBlock.length; i++){
                let img = stylesBlock[i].querySelector('img'),
                    block = stylesBlock[i].querySelector('.styles-block');                
                stylesBlock[i].setAttribute('style', 'display:inline-block !important');
                stylesBlock[i].style.width = '289.5px';
                stylesBlock[i].style.height = '373px';
                stylesBlock[i].style.paddingLeft = '15px';
                stylesBlock[i].style.paddingRight = '15px';
                block.style.width = '262.5px';
                block.style.height = '343px';
                block.style.marginRight = '0px';
                img.style.display = 'block';
                img.style.height = '214px';
                img.style.width = '153px';
            }
            buttonStyles.style.display = 'none';
        }
    });
}

module.exports = stylesBlock;