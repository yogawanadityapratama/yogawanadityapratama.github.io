// Show Menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-togle'),
      navClose = document.getElementById('nav-close')

// Show
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// Hidden
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Remove
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Change Background Header
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('header-bg') 
                       : header.classList.remove('header-bg')
}
window.addEventListener('scroll', scrollHeader)

// Scrol Animation
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2500
})

sr.reveal('.home__images', {distance: '120px', delay: 400})
sr.reveal('.home__title', {delay: 1000})
sr.reveal('.home__deskripsi', {delay: 1200})
sr.reveal('.home__button', {delay: 1400})
sr.reveal('.home__footer', {delay: 1600})
sr.reveal('.home__data', {origin: 'right', interval: 100,delay: 1600})