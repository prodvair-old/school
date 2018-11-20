$(function() {

	$('.burger').on('click', function (e){
		e.preventDefault();
		$('.burger').toggleClass('active');
		$('.header__menu').toggleClass('header__menu-active');
	});

	$('.progress__carusel').slick({
		infinite: true,
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 3
	});

	$('.progress__carusel').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});

});
