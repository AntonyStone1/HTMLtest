'use strict'

const hamburgerBtn = document.querySelector('.hamburger_container');
const navList = document.querySelector('.header_navigation-list');

const hamburgerSwitch = () => {
    hamburgerBtn.classList.toggle('hamburger_container-active');
    navList.classList.toggle('header_navigation-list__active')
}

hamburgerBtn.addEventListener('click', hamburgerSwitch)