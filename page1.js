let bird = document.querySelector('.bird');

document.querySelector('#cart-btn').onclick = () =>{
    car.classList.toggle('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}



let login = document.querySelector('.login');

document.querySelector('#masuk-btn').onclick = () =>{
    login.classList.toggle('active');
    car.classList.remove('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    car.classList.remove('active');
    login.classList.remove('active');
}


window.onscroll = () =>{
    car.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');

}

 var swiper = new Swiper(".product-slider", {
    loop:true,
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay:{
        delay: 7500,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });


     var swiper = new Swiper(".review-slider", {
    loop:true,
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay:{
        delay: 7500,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });


    // Dark mode
document.getElementById("darkModeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});