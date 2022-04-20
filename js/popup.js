function popupInitialize() {
	$('.show__popup-btn').each(function () {
		var idPopup = $(this).data('popup');
		var idStory = $(this).data('story');
		$(this).click(function () {
			showPopup(idPopup);
			
			var swiperPopup = new Swiper(".popup-slider .swiper", {
				navigation: {
					nextEl: ".popup-slider .swiper-button-next",
					prevEl: ".popup-slider .swiper-button-prev",
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
			});
			swiperPopup.slideTo(idStory);
		});
	});

	$('.popup-stories').find('.close-popup').click(function () {
		var idPopup = $(this).closest('.popup-stories').attr('id');
		hidePopup(idPopup);
	});

	$(document).mouseup(function (e) {
		var container = $('.popup__inner');
		var idPopup = $(e.target).closest('.popup-stories').attr('id');
		if (container.is(e.target) && container.has(e.target).length === 0) {
			hidePopup(idPopup);
		}
	});
}
function showPopup(id) {
	var animatedIn = $('#' + id).find('.popup__content').data('animatedin');
	$('body').addClass('overflowed');
	$('#' + id).addClass('opened');
	$('#' + id).fadeIn();
	$('#' + id).find('.popup__content').addClass(animatedIn);
}

function hidePopup(id) {
	var animatedIn = $('#' + id).find('.popup__content').data('animatedin');
	var animatedOut = $('#' + id).find('.popup__content').data('animatedout');
	
	$('#' + id).removeClass('opened');
	$('#' + id).find('.popup__content').removeClass(animatedIn).addClass(animatedOut);
	$('#' + id).fadeOut();
	setTimeout(function () {
		if($('.popup-stories.opened').length === 0){
			$('body').removeClass("overflowed");
		}
		$('#' + id).find('.popup__content').removeClass(animatedOut);
	}, 400);
}
function hidePopupAll() {
	let idPopup = $('.popup-stories:visible').attr('id');
	hidePopup(idPopup);
}