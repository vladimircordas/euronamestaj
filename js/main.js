$(document).ready(function(){
    $(".slick-intro").slick({
        slidesToShow: 1,		  
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,		 
        speed: 750,
        arrows: false,
        appendDots: $('#intro')
      });
    });