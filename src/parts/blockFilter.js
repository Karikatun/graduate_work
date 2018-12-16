function blockFilter() {
    let portfolio = document.querySelector('.portfolio'),
        menu = portfolio.querySelector('.portfolio-menu'),
        menuList = menu.querySelectorAll('#menu-list'),
        wrapper = portfolio.querySelector('.portfolio-wrapper'),
        blockImages = portfolio.querySelectorAll('.portfolio-block'),
        girls = wrapper.querySelectorAll('.girl'),
        lovers = wrapper.querySelectorAll('.lovers'),
        guy = wrapper.querySelectorAll('.guy'),
        chef = wrapper.querySelectorAll('.chef'),
        noPortfolio = portfolio.querySelector('.portfolio-no');



    function hideContent() {
        for (let i = 0; i < blockImages.length; i++) {
            blockImages[i].style.display = 'none';
        }
        menuList.forEach((item) => {
            item.style.color = 'black';
            item.style.border = '0px';
        });
        noPortfolio.style.display = 'none';
    }

    function showBlock(menuItem) {
        menuItem.forEach((item) => item.style.display = 'block');
    }

    function showActive(b) {
        menuList[b].style.color = '#C51ABB';
        menuList[b].style.border = '1px solid #C51ABB';
        menuList[b].style.borderRadius = '50px';
    }


    menu.addEventListener('click', (e) => {
        if (e.target) {
            if (e.target.classList.contains('girl')) {
                hideContent();
                showBlock(girls);
                showActive(3);
            } else if (e.target.classList.contains('guy')) {
                hideContent();
                showBlock(guy);
                showActive(4);
            } else if (e.target.classList.contains('chef')) {
                hideContent();
                showBlock(chef);
                showActive(2);
            } else if (e.target.classList.contains('lovers')) {
                hideContent();
                showBlock(lovers);
                showActive(1);
            } else if (e.target.classList.contains('granddad')) {
                hideContent();
                noPortfolio.style.display = 'block';
                showActive(6);
            } else if (e.target.classList.contains('active')) {
                hideContent();
                blockImages.forEach((item) => item.style.display = 'block');
                showActive(0);
            } else if (e.target.classList.contains('grandmother')) {
                hideContent();
                noPortfolio.style.display = 'block';
                showActive(5);
            }
        }
    });


}

module.exports = blockFilter;