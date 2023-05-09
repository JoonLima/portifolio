const menuBtn = document.querySelector('#icon-menu');
const menu = document.querySelector('.menu');
const menuMobile = document.querySelector('.menu-mobile')

function showMenu() {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open')
    } else {
        menu.classList.add('open')
    }
}

function showMenuMobile(){
    if(menuMobile.classList.contains('mobile-open')){
        menuMobile.classList.remove('mobile-open')
    } else {
        menuMobile.classList.add('mobile-open')
    }
}
