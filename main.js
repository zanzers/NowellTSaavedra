// ========== SHOW MENU ==========
const navMenu = document.getElementById('nav-menu');
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

// ========== MENU SHOW ==========

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// ==========MENU HIDE ==========

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

 const navLink = document.querySelectorAll('.nav-link')

 const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
 }
 navLink.forEach(n => n.addEventListener('click', linkAction));


//  ========== SWIPER ==========

var swiper = new Swiper(".projects_container", {
    loop: true,
    spaceBetween: 24,

    navigation: {
            nextEl:".swiper-button-next",
            prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination"
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    },
});

// ========== SCROLL SECTIONS ACTIVE LINK =============

const section = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    section.forEach(current => {
        const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop - 58,
                    sectionId = current.getAttribute('id'),
                    sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// ========== SCROLL UP =============

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// CHANGE BACKGROUND HEADER

const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)


// ========== SCROLL REVEAL ANIMATION ==========
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home_data, .projects_container, .footer_container, home_prefil')
sr.reveal('.home_info div', {delay: 600, origin: 'bottom', interval: 100})
sr.reveal('.skills_content:nth-child(1)', {origin: 'left'})
sr.reveal('.skills_content:nth-child(2)', {origin: 'right'})
sr.reveal('.gallery_container', {interval: 200, origin: 'top'})
sr.reveal('.blog_content', {delay: 100, origin: 'left', interval:100})