$(document).ready(function () {
	// $('.stories').slick({
	// 	infinite: true,
	// 	slidesToShow: 8,
	// 	slidesToScroll: 1
	// });
	var swiper = new Swiper(".stories", {
		slidesPerView: 8,
		spaceBetween: 18,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
});
$(window).resize(function () {

});
