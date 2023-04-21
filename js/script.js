const menuBtn = document.querySelector('#icon-menu');
const menu = document.querySelector('.menu');

function showMenu() {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open')
        menuBtn.classList.remove('bx-x')
        menuBtn.classList.add('bx-menu')
    } else {
        menu.classList.add('open')
        menuBtn.classList.remove('bx-menu')
        menuBtn.classList.add('bx-x')
    }
}
