'use strict'

const hamburgerBtn = document.querySelector('.c-hamburger');
const navList = document.querySelector('.header_navigation-list');


const hamburgerSwitch = (event) => {
    let target = event.target;

    if (target.innerText === 'toggle menu') {
        hamburgerBtn.classList.toggle('is-active');
        navList.classList.toggle('header_navigation-list__active')
        return;
    }

    if (target.innerText !== 'toggle menu')
        hamburgerBtn.classList.remove('is-active');
        navList.classList.remove('header_navigation-list__active')
}

document.addEventListener('click', hamburgerSwitch)

$(document).ready(function(){        
    $('.contacts_list-heading').click(function(event) {
        let target = event.target.nextElementSibling
        $(target).toggle(300)
        console.log(target);
    })    
  });

