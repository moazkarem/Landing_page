/*=============== SHOW MENU ===============*/
const navMenue = document.getElementById('nav-menu')
const navTogle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
/*=============== MENU SHOW ===============*/
if(navTogle){
    navTogle.addEventListener('click' , ()=>{
        navMenue.classList.add('show-menue')
    })
}

/*=============== MENU SHOW ===============*/
if(navClose){
    navClose.addEventListener('click' , ()=>{
        navMenue.classList.remove('show-menue')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
navLink.forEach((link)=>{
    link.addEventListener('click' , ()=>{
        navMenue.classList.remove('show-menue')
    })
})
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50){
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }

}
window.addEventListener('scroll' , scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
const scroll__up = document.getElementById('scroll-up')
const scrolling = ()=>{
    if(this.scrollY >= 200){
        scroll__up.classList.add('show');
    } else {
        scroll__up.classList.remove('show');
    }
}
window.addEventListener('scroll' , scrolling)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id')
    const target = document.querySelector(`.nav__menu a[href='#${sectionId}']`)
   
if(target){
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        target.classList.add('active-link')
    }else{
        target.classList.remove('active-link')
    }
}
        
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__header, .section__title`,{delay: 600})
sr.reveal(`.home__footer`,{delay: 700})
sr.reveal(`.home__img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate`,{origin: 'left', interval: 100})
sr.reveal(`.specs__img, .discount__img`,{origin: 'right'})
sr.reveal(`.case__img`,{origin: 'top'})
sr.reveal(`.case__data`)
