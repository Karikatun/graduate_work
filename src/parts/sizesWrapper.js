function sizesWrapper() {
    let sizesWrapper = document.querySelector('.sizes-wrapper'),
        sizesBlock = sizesWrapper.querySelectorAll('.sizes-block'),
        arrPicsDef = ['img/sizes-1.png', 'img/sizes-2.png', 'img/sizes-3.png', 'img/sizes-4.png'],
        arrPics = ['img/sizes-1-1.png', 'img/sizes-2-1.png', 'img/sizes-3-1.png', 'img/sizes-4-1.png'];

    for (let i = 0; i < sizesBlock.length; i++) {
        sizesBlock[i].addEventListener('mouseover', function (e) {
            e.target.src = arrPics[i];
            let p = sizesBlock[i].querySelectorAll('p');
            for (let i = 0; i < 3; i++) {
                p[i].style.display = 'none';
            }
        });
        sizesBlock[i].addEventListener('mouseout', function (e) {
            let p = sizesBlock[i].querySelectorAll('p');
            for (let i = 0; i < 3; i++) {
                p[i].style.display = 'block';
            }
            e.target.src = arrPicsDef[i];

        });
    }
}

module.exports = sizesWrapper;