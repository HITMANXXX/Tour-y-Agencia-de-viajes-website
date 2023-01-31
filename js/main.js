let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn')


/*------remover scroll barra de busqueda --------*/
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

/*------evento click expandir barra de busqueda -----*/
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
})

/*------evento click expandir formulario -----*/
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
})

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
})

/*------evento click menu bar responsive -----*/
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

/*------botones del slider para recorrer los videos -----*/
videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

/*------swiper slider de las opiniones -----*/
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    lopp: true,
    autoplay:{
        delay: 2500,
        disableOnInteraction: false
    },
    breakpoints:{
        640:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        }

    }
});

/*------swiper slider de las marcas -----*/
var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    lopp: true,
    autoplay:{
        delay: 2500,
        disableOnInteraction: false
    },
    
    breakpoints:{
        450:{
            slidesPerView: 2
        },
        768:{
            slidesPerView: 3
        },
        991:{
            slidesPerView: 4
        },
        1200:{
            slidesPerView: 5
        }
    }
});