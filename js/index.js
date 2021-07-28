$(document).ready(function(){
	var swiper = new Swiper('.mySwiper',{
		navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
		slidesPerView: 1.61,
        spaceBetween: 30,
        centeredSlides: true,
		mousewheel: true,
		initialSlide: 1			
	});

	 $(".hover").mouseleave(
		function () {
      $(this).removeClass("hover");
    }
  );

    var swiper = new Swiper(".mySwiper2", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

$(".snip1273").on("mouseover",function(){
	$(".info").css({"display":"block"});
	$(".info2").css({"display":"block"});
});
$(".snip1273").on("mouseout",function(){
	$(".info").css({"display":"none"});
	$(".info2").css({"display":"none"});
});
$(".snip1273").on("mouseover",function(){
	$(".info3").css({"display":"block"});
	$(".info4").css({"display":"block"});
});
$(".snip1273").on("mouseout",function(){
	$(".info3").css({"display":"none"});
	$(".info4").css({"display":"none"});
});

});

