function stylesBlock() {
    let stylesBlock = document.querySelectorAll('.hidden-block'),
        buttonStyles = document.querySelector('.button-styles');

    window.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('button-styles')){
            for (let i = 0; i < stylesBlock.length; i++){
                stylesBlock[i].setAttribute('style', 'display:block !important');
            }
            buttonStyles.style.display = 'none';
        }
    });
}

module.exports = stylesBlock;