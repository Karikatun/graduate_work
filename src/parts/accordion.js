function accordion() {

    let oftenQuestions = document.querySelector('.often-questions'),
        accordionContainer = oftenQuestions.querySelector('.container'),
        accordionHeading = accordionContainer.querySelectorAll('.accordion-heading'),
        accordionBlock = accordionContainer.querySelectorAll('.accordion-block'),
        span = accordionContainer.querySelectorAll('span');

        accordionBlock.forEach((item) => item.classList.add('animated', 'fadeIn'));


    function hideBlock() {
        for (let i = 0; i < accordionBlock.length; i++) {
            accordionBlock[i].style.display = 'none';
            if (accordionBlock[i].classList.contains('fadeIn')) {
                accordionBlock[i].classList.replace('fadeIn', 'fadeOut');
            }
            span[i].style.color = 'black';
            span[i].style.borderBottom = '2px dotted #333';
        }
    }
    hideBlock();

    function showBlock(a) {
        if (accordionBlock[a].style.display === 'none') {
            accordionBlock[a].style.display = 'block';
            if (accordionBlock[a].classList.contains('fadeOut')) {
                accordionBlock[a].classList.replace('fadeOut', 'fadeIn');
            }
        }
    }



    for (let i = 0; i < accordionHeading.length; i++) {
        accordionHeading[i].addEventListener('click', () => {
            if (accordionBlock[i].style.display === 'none'){
                hideBlock();
                span[i].style.color = 'pink';
                span[i].style.borderBottom = 'none';                
                showBlock(i);    
            } else {
                span[i].style.color = 'black';
                span[i].style.borderBottom = '2px dotted #333';
                hideBlock();    
            }
        });
    }
    console.log(span);
}

module.exports = accordion;