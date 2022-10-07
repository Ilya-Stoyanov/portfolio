 $(document).ready(function () {
    $('.mobile__menu').click(function () {
       $('.mobile__menu-line').toggleClass("active");
       $('.nav').toggleClass("active");
       $('body').toggleClass("overlay");
    });

    $('.heroy__btn-video').click(function () {
       $('.backdrop').toggleClass('is-hidden');
       $('body').toggleClass("overlay");
    });

    $('.modal-btn-close').click(function () {
       $('.backdrop').toggleClass('is-hidden');
       $('body').toggleClass("overlay");
    });

 });

const header = document.querySelector('.header');
const headerTop = document.querySelector('.header__wrapper'); 
const hwHeight = headerTop.offsetHeight;
console.log(hwHeight);
  

window.addEventListener('scroll', function(){
    let scrollDistanation = window.scrollY; 
    if(scrollDistanation > 55){
        headerTop.classList.add('header__wrapper-fixed');
    } else{
        headerTop.classList.remove('header__wrapper-fixed');
    }
})
