$(document).ready(function(){
    $('.carousel.caurosel-slider').carousel();
    $('.parallax').parallax();
   $('.carousel.carousel-slider').carousel({fullWidth: true});
      $('.carousel.carousel-slider').on('click', function(){$('.carousel').carousel('next');
      $('.button-collapse').sideNav();
    });
  });