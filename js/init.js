/*
 * Copyright (c) 2017 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
 */


jQuery(document).ready(function () {

	"use strict";



	// here all ready functions

	hamburger();
	imgtosvg();
	magnific_popup();
	jarallax();
	portfolio();
	portfolio_animation();
	totop();
	totop_myhide();
	nav_bg_scroll();
	anchor();
	contact_form();
	owl_carousel();
	text_animation();
	animate_text();
	popupscroll();
	popup_blog();


	jQuery(window).on('scroll', function () {
		//e.preventDefault();
		totop_myhide();
		nav_bg_scroll();
	});

	jQuery(window).on('resize', function () {

	});

});

// -----------------------------------------------------
// --------------------  FUNCTIONS  --------------------
// -----------------------------------------------------

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function imgtosvg() {

	"use strict";

	jQuery('img.svg').each(function () {

		var jQueryimg = jQuery(this);
		var imgClass = jQueryimg.attr('class');
		var imgURL = jQueryimg.attr('src');

		jQuery.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// ---------------  HAMBURGER  -------------------------
// -----------------------------------------------------

function hamburger() {

	"use strict";

	var hamburger = jQuery('.hamburger');
	var mobileMenu = jQuery('.mobile_menu_wrap');

	hamburger.on('click', function () {
		var element = jQuery(this);

		if (element.hasClass('is-active')) {
			element.removeClass('is-active');
			mobileMenu.slideUp();
		} else {
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
}

// -----------------------------------------------------
// --------------    MAGNIFIC POPUP    -----------------
// -----------------------------------------------------

function magnific_popup() {

	"use strict";

	jQuery('.open-popup-link').magnificPopup({
		type: 'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

	jQuery('.gallery').each(function () { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	});
	jQuery('.gallery_zoom').each(function () { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled: true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube').each(function () { // the containers for all your galleries
		jQuery(this).magnificPopup({
			//type: 'iframe',
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function jarallax() {

	"use strict";

	jQuery('.jarallax').each(function () {
		var element = jQuery(this);
		var customSpeed = element.data('speed');

		if (customSpeed !== "undefined" && customSpeed !== "") {
			customSpeed = customSpeed;
		} else {
			customSpeed = 0.5;
		}

		element.jarallax({
			speed: customSpeed
		});
	});
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 

function portfolio() {

	"use strict";

	if (jQuery().isotope) {

		// Needed variables
		var list = jQuery('.portfolio_list');
		var filter = jQuery('.portfolio_filter');

		if (filter.length) {
			// Isotope Filter 
			filter.find('a').on('click', function () {
				var selector = jQuery(this).attr('data-filter');
				list.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				});
				return false;
			});

			// Change active element class
			filter.find('a').on('click', function () {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});
		}
	}
}

function portfolio_animation() {

	"use strict";

	var list = jQuery('.portfolio_list > li');

	list.each(function () {
		var el = jQuery(this);
		var el2 = el.find('.list_inner');
		var image = el.find('.image_wrap');
		var definition = el.find('.definition_portfolio');
		var definitionH = el.find('.definition_portfolio').outerHeight();

		el2.each(function () {
			var el3 = jQuery(this);
			el3.on('mouseenter', function () {
				image.css({
					top: -definitionH / 2
				});
				definition.css({
					marginTop: -definitionH
				});
			}).on('mouseleave', function () {
				image.css({
					top: 0
				});
				definition.css({
					marginTop: 0
				});
			});

		});
	});
}

// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------

function totop() {

	"use strict";

	jQuery(".to_top_wrap").on('click', function (e) {
		e.preventDefault();
		jQuery("html, body").animate({
			scrollTop: 0
		}, 'slow');
		return false;
	});
}

function totop_myhide() {

	"use strict";

	var toTop = jQuery(".to_top_wrap");
	if (toTop.length) {
		var topOffSet = toTop.offset().top;

		if (topOffSet > 1300) {
			toTop.addClass('opened');
		} else {
			toTop.removeClass('opened');
		}
	}
}

// -----------------------------------------------------
// ------------    NAV BACKGROUND  SCROLL    -----------
// -----------------------------------------------------

function nav_bg_scroll() {

	"use strict";

	var header = jQuery('.header');
	var windowScroll = jQuery(window).scrollTop();
	var W = jQuery(window).width();

	if (W > 1040) {
		jQuery(window).scroll(function () {
			if (windowScroll >= '100') {
				header.addClass('scroll');
			} else {
				header.removeClass('scroll');
			}
		});
	}
}

// -----------------------------------------------------
// ------------    ANCHOR NAVIGATION    ----------------
// -----------------------------------------------------

function anchor() {

	"use strict";

	jQuery('.anchor_nav').onePageNav();

	var scrollOffset = 0;

	jQuery(".anchor a").on('click', function (evn) {
		evn.preventDefault();
		jQuery('html,body').scrollTo(this.hash, this.hash, {
			gap: {
				y: -scrollOffset - 85
			},
			animation: {
				duration: 1500,
				easing: "easeInOutExpo"
			}
		});
		return false;
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function contact_form() {

	"use strict";

	jQuery(".contact_form #send_message").on('click', function () {

		var name = jQuery(".contact_form #name").val();
		var email = jQuery(".contact_form #email").val();
		var message = jQuery(".contact_form #message").val();
		var subject = jQuery(".contact_form #subject").val();
		var success = jQuery(".contact_form .returnmessage").data('success');

		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if (name === '' || email === '' || message === '') {

			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		} else {
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php", {
				ajax_name: name,
				ajax_email: email,
				ajax_message: message,
				ajax_subject: subject
			}, function (data) {

				jQuery(".contact_form .returnmessage").append(data); //Append returned message to message paragraph


				if (jQuery(".contact_form .returnmessage span.contact_error").length) {
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);
				} else {
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>" + success + "</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}

				if (data === "") {
					jQuery("#contact_form")[0].reset(); //To reset form fields on success
				}

			});
		}
		return false;
	});
}

// -----------------------------------------------------
// --------------------    OWL CAROUSEL    -------------
// -----------------------------------------------------

function owl_carousel() {

	"use strict";

	var carusel2 = jQuery('.testimonial_wrap .owl-carousel');
	carusel2.owlCarousel({
		loop: true,
		margin: 70,
		autoplay: 7000,
		autoWidth: false,
		nav: false,
		items: 3,
		smartSpeed: 5000,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			},
			1040: {
				items: 3
			},
			1600: {
				items: 3
			},
			1920: {
				items: 3
			}
		}
	});

	var carusel3 = jQuery('.partners_wrap .owl-carousel');
	carusel3.owlCarousel({
		loop: true,
		margin: 40,
		autoplay: 6000,
		autoWidth: false,
		nav: false,
		items: 4,
		smartSpeed: 3000,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			},
			1040: {
				items: 4
			},
			1600: {
				items: 4
			},
			1920: {
				items: 4
			}
		}
	});
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

new WOW().init();

// -----------------------------------------------------
// ---------------    HERO TEXT ANIATION  --------------
// -----------------------------------------------------

function text_animation() {

	"use strict";

	var H = jQuery(window).height();
	var titleHolder = jQuery('.universal_box_wrap .hero_title');
	var titleHeight = titleHolder.outerHeight();
	var headerHeight = jQuery('.header').outerHeight();

	var height = H / 2 + titleHeight / 2 - headerHeight;

	jQuery(window).on('scroll', function () {
		var window_offset = jQuery(window).scrollTop();
		titleHolder.css({
			opacity: 1 - (window_offset / height),
			marginTop: (window_offset / height) * 200
		});
	});
}

// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

function animate_text() {

	"use strict";

	var animateSpan = jQuery('.animation_text_word');

	animateSpan.typed({
		strings: ["GRAPHIC DESIGNER", "WEB DEVELOPER", "CREATIVE"],
		loop: true,
		startDelay: 1e3,
		backDelay: 2e3
	});
}

// -----------------------------------------------------
// -------------------    POPUP BLOG    ----------------
// -----------------------------------------------------

function popup_blog() {
	"use strict";
	var li = jQuery('.list_wrap.blog_list .inner_list');
	var popupBox = jQuery('#popup_blog');
	var popupInner = popupBox.find('.inner_popup');
	var closePopup = popupBox.find('.close');

	li.each(function () {
		var element = jQuery(this);
		var button = element.find('.read_more a,.title_holder a,.link_news');
		var html = element.html();
		var mainImage = element.find('.news_image');
		var imgData = mainImage.data('url');
		var title = element.find('.title_holder h3');
		var titleHref = element.find('.title_holder h3 a').html();

		mainImage.css({
			backgroundImage: 'url(' + imgData + ')'
		});
		button.on('click', function () {
			popupBox.addClass('opened');
			popupInner.html(html);
			mainImage = popupInner.find('.news_image');
			mainImage.css({
				backgroundImage: 'url(' + imgData + ')'
			});
			title = popupInner.find('.title_holder h3');
			title.html(titleHref);
			return false;
		});
	});
	closePopup.on('click', function () {
		popupBox.removeClass('opened');
		popupInner.html('');
		return false;
	});
}

// -----------------------------------------------------
// -------------    BLOG MENU SCROLL -------------------
// -----------------------------------------------------

function popupscroll() {

	"use strict";

	var H = jQuery(window).height();
	var scrollable = jQuery('.scrollable');

	var popupBox = jQuery('.popup_blog .inner_popup');

	popupBox.css({
		height: H - 100
	});

	scrollable.each(function () {
		var element = jQuery(this);
		var wH = jQuery(window).height();

		element.css({
			height: wH - 100
		});

		element.niceScroll({
			touchbehavior: false,
			cursorwidth: 0,
			autohidemode: true,
			cursorborder: "0px solid #fff"
		});
	});
	//scroll
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.to(".leftbox", 1, {
		rotation: 360,
		ease: Linear.easeNone
	});
	var scene = new ScrollMagic.Scene({
			offset: 50,
			duration: 1300
		})
		.setTween(tween)
		.setPin(".lef1tbox", {
			pushFollowers: false
		})
		.addTo(controller);
}