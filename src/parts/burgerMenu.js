function burgerMenu() {
    let burger = document.querySelector('.burger'),
        burgerMenu = document.querySelectorAll('.burger-menu')[0];
    if (document.body.clientWidth <= 768) {
        burger.addEventListener('mouseover', () => {
            burgerMenu.style.display = 'block';
        });
        burger.addEventListener('mouseout', () => {
            burgerMenu.style.display = 'none';
        });        
    }
    window.addEventListener('orientationchange', () => {
        burgerMenu.style.display = 'none';
    });
}

module.exports = burgerMenu;