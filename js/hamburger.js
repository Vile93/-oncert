const hamburger = document.querySelector('.hamburger'),
    menuItem = document.querySelectorAll('.menu__item'),
    menuLink = document.querySelectorAll('.menu__link'),
    header = document.getElementById('header');

let overflow = true;

const bodyOverflow = () => {
    if (overflow) {
        body.style.overflow = "hidden";
        overflow = false;
    } else {
        body.style.overflow = "scroll";
        overflow = true;
    }
}

const checkClass = () => {
    if (currClick.classList.contains('menu__link') && window.innerWidth <= 600) {
        if (!(currClick.dataset.link == 1)) {
            hamburger.classList.toggle('hamburger--active');
            menuItem.forEach((el, ind) => {
                menuItem[ind].classList.toggle('menu__item--active');
            });
            bodyOverflow();
        }
    }
}

hamburger.addEventListener('click', e => {
    if (window.innerWidth <= 600) {
        hamburger.classList.toggle('hamburger--active');
        menuItem.forEach((el, ind) => {
            menuItem[ind].classList.toggle('menu__item--active');
        });
        bodyOverflow();
    }
})

header.addEventListener('click', e => {
    currClick = e.target;
    checkClass(currClick);
})

window.addEventListener('resize', () => {
    if (window.innerWidth <= 600) {
        menuLink[4].innerHTML = 'MERCH';
    } else {
        menuLink[4].innerHTML = 'MORE<i class="menu__dropdown-icon fa-solid fa-caret-down"></i>';
    }
})