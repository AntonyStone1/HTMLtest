'use strict'

const hamburgerBtn = document.querySelector('.hamburger_container');
const navList = document.querySelector('.header_navigation-list');
const contactLists = document.querySelector('.contacts_list');


const hamburgerSwitch = () => {
    hamburgerBtn.classList.toggle('hamburger_container-active');
    navList.classList.toggle('header_navigation-list__active')
}


hamburgerBtn.addEventListener('click', hamburgerSwitch);

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
    simulateTouch: true,
    spaceBetween: 10,
    breakpoints: {
        370: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 1,
            initialSlide: 1,
            spaceBetween: 10,
        },
        1000: {
            slidesPerView: 2,
        },
        1450: {
            slidesPerView: 3,
        },
    }
});

$(document).ready(function(){
    $(".contacts_list-item").click(function(){
        $(".list").toggle(300);
    });
    }); 

