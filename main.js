(function () {
const header = document.querySelector('.header');
window.onscroll = () => {
    if (window.pageYOffset > 1000) {
        header.classList.add('header_active');
    }else{
        header.classList.remove('header_active');
    }
};


}());

(function () {
    const burgerItem = document.querySelector('.burger'); 
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');
    const menuLink1 = document.querySelector('.header_link1');
    const menuLink2 = document.querySelector('.header_link2');
    const menuLink3 = document.querySelector('.header_link3');
    const menuLink4 = document.querySelector('.header_link4');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
   
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');

    });
    menuLink1.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });
    menuLink2.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });
    menuLink3.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });
    menuLink4.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });
}());