$(function() {

$('input[type=tel]').mask('+7 (999) 999-99-99');

$('.fancybox').fancybox();

$('.fancybox-media').fancybox({
	helpers : {
		media : {}
	}
});

$('.js-modal-open').click(function(e) {
	e.preventDefault();
	$('body').addClass('overflow-hidden');
	$( $(this).attr('href') ).fadeIn();
});

$('.modal__close').click(function() {
	$('body').removeClass('overflow-hidden');
	$(this).parents('.modal-wrapper').fadeOut();
});

$('.modal-wrapper').click(function(e) {
	let modal = $(this).find('.modal');
	if (modal.is(e.target) || modal.has(e.target).length > 0) return;
	$('body').removeClass('overflow-hidden');
	$(this).fadeOut();
});

$('.js-scroll-link').click(function(e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $( $(this).attr('href') ).offset().top
	}, 1000);
});

$('.tabs__content').hide();
$('.tabs__content:first').show();
$('.tabs__list li:first').addClass('active');
$('.tabs__list li').click(function(event) {
	let parent = $(this).parents('.tabs');
	parent.find('.tabs__list li').removeClass('active');
	$(this).addClass('active');
	parent.find('.tabs__content').hide();
	var selectTab = $(this).find('a').attr("href");
	$(selectTab).fadeIn();
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 0) {
		$('.scroll-top').fadeIn(200);
	} else {
		$('.scroll-top').fadeOut(200);
	}
});

$('.scroll-top').click(function() {
	$('html, body').animate({scrollTop: 0}, 1000);
});

$('.scroll-link').click(function(e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $( $(this).attr('href') ).offset().top
	}, 1000);
});

$('.projects__slider .slider__list').slick({
	autoplay: true,
	autoplaySpeed: 5000,
	prevArrow: '.projects__slider .slider__prev',
	nextArrow: '.projects__slider .slider__next',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				dots: true
			}
		}
	]
});

$('.tariffs__slider .slider__list').slick({
	autoplay: true,
	autoplaySpeed: 5000,
	prevArrow: '.tariffs__slider .slider__prev',
	nextArrow: '.tariffs__slider .slider__next',
	slidesToShow: 3,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				dots: true,
				slidesToShow: 1
			}
		}
	]
});

$('.videos__slider .slider__list').slick({
	autoplay: true,
	autoplaySpeed: 5000,
	prevArrow: '.videos__slider .slider__prev',
	nextArrow: '.videos__slider .slider__next',
	slidesToShow: 2,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				dots: true,
				slidesToShow: 1
			}
		}
	]
});

$('.faq__question').click(function() {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		$(this).parents('.faq__item').find('.faq__answer').slideUp();
	} else {
		$('.faq__question').removeClass('active');
		$('.faq__answer').slideUp();
		$(this).addClass('active');
		$(this).parents('.faq__item').find('.faq__answer').slideDown();
	}
});

$('.header__toggle').click(function() {
	$('.header__nav').slideToggle();
});

});
