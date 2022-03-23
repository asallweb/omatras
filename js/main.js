$(document).ready(function () {

	/* Popup initialize */
	popupInitialize();

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
		},
	});
	var swiper = new Swiper(".stories-sidebar .swiper", {
		slidesPerView: 2,
		spaceBetween: 20,
		navigation: {
			nextEl: ".stories-sidebar .swiper-button-next",
		},
	});
	var swiper = new Swiper(".popup-slider .swiper", {
		navigation: {
			nextEl: ".popup-slider .swiper-button-next",
			prevEl: ".popup-slider .swiper-button-prev",
		},
	});
});
$(window).resize(function () {

});
