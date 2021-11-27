$(function () {
	// слайдер в баннере
	$(".section-banner__slider").slick({
		dots: true,
		prevArrow:
			'<button class="section-banner__slider-btn section-banner__slider-btnprev"><img src="./images/icons/arrow-left.svg" alt="arrow-left"></button>',
		nextArrow:
			'<button class="section-banner__slider-btn section-banner__slider-btnnext"><img src="./images/icons/arrow-right.svg" alt="arrow-right"></button>',
		responsive: [
			{
				breakpoint: 361,
				settings: {
					arrows: false,
				},
				breakpoint: 1025,
				settings: {
					arrows: false,
					autoplay: true,
					autoplaySpeed: 3000,
				},
			},
		],
	});
	$(".section-banner__slider").slick("setPosition");
	
	//переключение табов в секции поиска и в секциях со слайдером товаров
	$(".tab").on("click", function (e) {
		e.preventDefault();
		$($(this).siblings()).removeClass("tab--active");
		$($(this).closest(".tabs-wrapper").siblings().find("div")).removeClass(
			"tabs-content--active"
		);
		$(this).addClass("tab--active");
		$($(this).attr("href")).addClass("tabs-content--active");
		$(".slick-slider").slick("setPosition");
	});
	// переключение отметки избранный товар в карточке товара
	$(".product-item__favorite").on("click", function () {
		$(this).toggleClass("product-item__favorite--active");
	});
	// слайдер секции популярные товары
	$(".section-products__content-slider").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow:
			'<button class="section-products__content-slider__slider-btn section-products__content-slider__slider-btnprev"><img src="./images/icons/arrow-left-black.svg" alt="arrow-left-black"></button>',
		nextArrow:
			'<button class="section-products__content-slider__slider-btn section-products__content-slider__slider-btnnext"><img src="./images/icons/arrow-right-black.svg" alt="arrow-right-black"></button>',
		responsive: [
			{
				breakpoint: 769,
				settings: {
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 3000,
					dots: true,
				},
			},
			{
				breakpoint: 1025,
				settings: {
					arrows: false,
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 3000,
					dots: true,
				},
			},

			{
				breakpoint: 361,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 3000,
					dots: true,
				},
			},
		],
	});
	// слайдер секции рекомендованные товары
	$(".section-recommended__content-slider").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow:
			'<button class="section-recommended__content-slider__slider-btn section-recommended__content-slider__slider-btnprev"><img src="./images/icons/arrow-left-black.svg" alt="arrow-left-black"></button>',
		nextArrow:
			'<button class="section-recommended__content-slider__slider-btn section-recommended__content-slider__slider-btnnext"><img src="./images/icons/arrow-right-black.svg" alt="arrow-right-black"></button>',
		responsive: [
			{
				breakpoint: 769,
				settings: {
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 3000,
					dots: true,
				},
			},
			{
				breakpoint: 1025,
				settings: {
					arrows: false,
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 3000,
					dots: true,
				},
			},

			{
				breakpoint: 361,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 3000,
					dots: true,
				},
			},
		],
	});

	// aside styler plagin

	$(".filter-style").styler();

	// dropdown in aside
	$(".aside-filter__item-title").on("click", function () {
		$(this).toggleClass("aside-filter__item-title--active");
		$(this).next().slideToggle("200");
	});
	// dropdown in aside footer
	$(".form-footer__extra").on("click", function () {
		$(this).toggleClass("form-footer__extra--active");
		$(this).next().slideToggle("200");
	});

	// aside filter range
	$(".js-range-slider").ionRangeSlider();

	// catalogue filter select on top
	$(".filter-attribute__grid").on("click", function () {
		$(this).addClass("filter-attribute__btn--active");
		$(".filter-attribute__line").removeClass("filter-attribute__btn--active");
		$(".section-catalogue__inner-list").removeClass(
			"section-catalogue__inner-listtocoloumn"
		);
	});
	$(".filter-attribute__line").on("click", function () {
		$(this).addClass("filter-attribute__btn--active");
		$(".filter-attribute__grid").removeClass("filter-attribute__btn--active");
		$(".section-catalogue__inner-list").addClass(
			"section-catalogue__inner-listtocoloumn"
		);
	});
	// rate stars
	$(".rate-yo").rateYo({
		starWidth: "23px",
		ratedFill: "#1C62CD",
		normalFill: "#C4C4C4",
		spacing: "7px",
	});

	// mob menu
	$(".menu__mobile-btn").on("click", function () {
		$(".menu__mobile").toggleClass("menu__mobile--active");
	});
	//footer nav dropdown

	$(".footer__top-list__title").on("click", function () {
		$(this).next().slideToggle();
		$(this).toggleClass("footer__top-list__title--active");
	});
	//aside btn dropdown
	$(".aside-btn").on("click", function () {
		$(this).next().slideToggle();
	});
});
