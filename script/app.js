'use strict'

const hamburgerBtn = document.querySelector('.c-hamburger');
const navList = document.querySelector('.header_navigation-list');
const contactLists = document.querySelector('.footer_contacts');


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

// const classToggle = (tag) => {
//     let selectedTag;
//         if (selectedTag) { // убрать существующую подсветку, если есть
//         selectedTag.classList.remove('active_contact');
//     }
//     selectedTag = tag;
//     selectedTag.classList.add('active_contact'); // подсветить новый td
// } 
let selectedTag;

contactLists.addEventListener('click', (event) => {
    let target = event.target
    console.log(target);
    if (target.classList.value !== 'contacts_list-item') return;
    toggleClass(target)    
})

function toggleClass(tag) {
    if (selectedTag) { // убрать существующую подсветку, если есть
        selectedTag.classList.remove('active_contact');
    }
    selectedTag = tag;
    selectedTag.classList.add('active_contact'); // подсветить новый td
} 



// $(document).ready(function(){
//     $(".contacts_list-item").click(function(event){
//         // $(".list").toggle(300);
//         console.log(event.target);
//     });
// }); 

$(document).ready(function(){
    $('.swiper-wrapper').slick({
        centerMode: true,
        arrows: false,
    });
  });

