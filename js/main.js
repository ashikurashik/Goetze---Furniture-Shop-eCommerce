(function ($) {
"use strick"

$(".toggle").on('click', function(){
    $(".toggle-show").slideToggle("slow");
  });
  $(".toggle-hide").on('click', function(){
    $(".toggle-fff").slideToggle("slow");
  });

/*Product Slider 4 Column*/

$('.product-carousel').slick({
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-double-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-double-right"></i></button>',
});



$(".owl-carousel").owlCarousel({
  loop: true,
  dots: true,
  margin: 15,
  slideSpeed: 1000,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  resonsiveClass: true,
  responsiveRefreshRate: true,
  responsive: {
      0 : {
          items: 1
      },
      768 : {
          items: 2
      },
      1000 : {
          items: 2
      },
      1200 : {
          items: 2
      },
      1920 : {
          items: 3
      }
  }
});  

wow = new WOW();
wow.init();






})(jQuery);
