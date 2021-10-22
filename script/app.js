'use strict'

const hamburgerBtn = document.querySelector('.hamburger_container');

const hamburgerSwitch = () => {
    hamburgerBtn.classList.toggle('hamburger_container-active');
    
}

hamburgerBtn.addEventListener('click', hamburgerSwitch)