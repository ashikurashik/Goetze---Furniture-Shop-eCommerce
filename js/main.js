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




})(jQuery);
