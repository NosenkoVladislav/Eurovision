$(document).ready(function(){
  $('.profile-wrapper').slick({
  	infinite: true,
  	slidesToShow: 3,
  	slidesToScroll: 3,
  	arrows: true,
  	appendArrows: '.control',
  	prevArrow: '<div class="control-left"></div>',
  	nextArrow: '<div class="control-right"></div>',	
  	variableWidth: true,
  	responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      }
    }
  ]
  });
});
		