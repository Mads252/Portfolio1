/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// Dette element aktiveres som menuen er åben kort sagt
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// Dette element aktiveres som menuen er lukket kort sagt
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*Det næste stykke linje fjerner menuen, når der bliver klikket på en sektion*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)



/*fjerner og tilføjer klasser så bootstrap funger for mig*/
// Denne kode bruger jQuery til at tilpasse en klasse ('d-flex') til et element ('homeData') baseret på vinduets bredde.
// Lytter også efter vinduesstørrelsesændringer og justerer klassen i overensstemmelse hermed.
jQuery(document).ready(function($) {
    var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 799) {
            $('.homeData').removeClass('d-flex');
        } else if (ww >= 800) {
            $('.homeData').addClass('d-flex');
        };
    };
    $(window).resize(function(){
        alterClass();
    });

    alterClass();
});




//  Denne JavaScript-kode bruger jQuery til at holde øje med, om jeg scroller ned på siden.
//  Hvis jeg scroller ned til eller forbi et bestemt punkt ('projekter' elementet), tilføjes en klasse ('skill-per') til et element med klassen 'rock'.
//  Hvis jeg scroller opad igen, fjernes klassen. Koden sikrer også, at dette tjek udføres, når siden indlæses.
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $('.rock').toggleClass('skill-per',

        scroll >= $('#projekter').offset().top
    );
});

$(window).scroll();