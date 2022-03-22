$(document).ready(function () {
	// $('.stories').slick({
	// 	infinite: true,
	// 	slidesToShow: 8,
	// 	slidesToScroll: 1
	// });
	var swiper = new Swiper(".stories-main .swiper", {
		slidesPerView: 8,
		spaceBetween: 17,
		navigation: {
			nextEl: ".stories-main .swiper-button-next",
			prevEl: ".stories-main .swiper-button-prev",
		},
	});
	var swiper = new Swiper(".stories-list .swiper", {
		slidesPerView: 4,
		spaceBetween: 17,
		navigation: {
			nextEl: ".stories-list .swiper-button-next",
			prevEl: ".stories-list .swiper-button-prev",
		},
	});
});
$(window).resize(function () {

});
