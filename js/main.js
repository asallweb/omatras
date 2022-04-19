$(document).ready(function () {

	/* Popup initialize */
	popupInitialize();

	var swiperMain = new Swiper(".stories-main .swiper", {
		slidesPerView: 8,
		spaceBetween: 17,
		navigation: {
			nextEl: ".stories-main .swiper-button-next",
			prevEl: ".stories-main .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: "auto",
			},
		},
	});
	var swiperList = new Swiper(".stories-list .swiper", {
		slidesPerView: 4,
		spaceBetween: 17,
		navigation: {
			nextEl: ".stories-list .swiper-button-next",
			prevEl: ".stories-sidebar .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: "auto",
			},
		},
	});
	var swiperSidebar = new Swiper(".stories-sidebar .swiper", {
		slidesPerView: 2,
		spaceBetween: 10,
		navigation: {
			nextEl: ".stories-sidebar .swiper-button-next",
			prevEl: ".stories-sidebar .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: "auto",
			},
		},
	});
	$('.popup .popup-detail').click(function(e){
		e.preventDefault();
		$(this).parent().find('.popup-body').slideToggle();
		$(this).toggleClass('active');
		if($(this).hasClass('active')){
			$(this).html('Свернуть');
		}else{
			$(this).html('Подробнее');
		}
	});
});
$(window).resize(function () {

});
