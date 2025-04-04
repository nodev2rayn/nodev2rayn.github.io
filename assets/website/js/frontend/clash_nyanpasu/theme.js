(function($) {
    'use strict';

			  /*==== meanmenu menu  ====*/
			  $(".mobile-menu nav").meanmenu({ meanScreenWidth: "990", meanMenuContainer: ".mobile-menu", onePage: !0 });
			  var emsmenu = $(".em-quearys-menu i.t-quearys");
			  var emscmenu = $(".em-quearys-menu i.t-close");
			  var emsinner = $(".em-quearys-inner");
			  emsmenu.on("click", function () {
				  emsinner.addClass("em-s-open");
				  $(this).addClass("em-s-hiddens");
				  emscmenu.removeClass("em-s-hidden");
			  });
			  emscmenu.on("click", function () {
				  emsinner.removeClass("em-s-open");
				  $(this).addClass("em-s-hidden");
				  emsmenu.removeClass("em-s-hidden");
			  });
			  var rightma = $(".right_sideber_menu i.openclass");
			  var rightmi = $(".right_sideber_menu i.closeclass");
			  var rightmir = $(".right_sideber_menu_inner");
			  rightma.on("click", function () {
				  rightmir.addClass("tx-s-open");
			  });
			  rightmi.on("click", function () {
				  rightmir.removeClass("tx-s-open");
			  });
				 /*==== mobile menu  ====*/
			  var mrightma = $(".mobile_menu_o i.openclass");
			  var mrightmi = $(".mobile_menu_o i.closeclass");
			  var mrightmir = $(".mobile_menu_inner");
			  var mobile_ov = $(".mobile_overlay");
			  mrightma.on("click", function () {
				  mrightmir.addClass("tx-s-open");
				  mobile_ov.addClass("mactive");
			  });
			  mrightmi.on("click", function () {
				  mrightmir.removeClass("tx-s-open");
				  mobile_ov.removeClass("mactive");
			  });
			  /*==== one page menu  ====*/
			  var top_offset = $(".one_page").height() + 0;
			  $(".one_page .techsold_menu .nav_scroll").onePageNav({ currentClass: "current", changeHash: !1, scrollSpeed: 1000, scrollOffset: top_offset, scrollThreshold: 0.5, filter: "", easing: "swing" });
			  $(".nav_scroll > li:first-child").addClass("current");
			  var pksticky = $(".scroll_fixed");
			  $(window).on("scroll", function () {
				  if ($(window).scrollTop() > 200) {
					  pksticky.addClass("prefix");
				  } else {
					  pksticky.removeClass("prefix");
				  }
			  });
			 /*==== transprent menu  ====*/
			  var pktransp = $(".trp_nav_area");
			  $(window).on("scroll", function () {
				  if ($(window).scrollTop() > 200) {
					  pktransp.addClass("hbg2");
				  } else {
					  pktransp.removeClass("hbg2");
				  }
			  });

			 /*==== WOW active js ====*/
			 new WOW().init();

			/*==== scrollUp  ====*/
			$.scrollUp({
				scrollText: '<i class="icofont-thin-up"></i>',
				easingType: 'linear',
				scrollSpeed: 900,
				animation: 'fade'
			});

			/*==== Venubox  ====*/
			$('.venobox').venobox({
				numeratio: true,
				infinigall: true
			});
			
			/*==== slider active ====*/
			new Swiper('.swiper_active ', {
				effect: 'slide',
				grabCursor: false,
				speed: 2000,
				slidesPerGroup: 1,
				slidesPerView: 1,		
				freeMode: true,
				mousewheel: false,
				keyboard: false,
				loop: false,
					autoplay: {
					delay: 8000,
					disableOnInteraction: false,
					},
					  pagination: {
						el: '.swiper-pagination',
						clickable: true,
						false: "progressbar",
					  },
					  navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					  },
					  scrollbar: {
						el: '.scrollbar_false',
						hide: true,
					  },
					breakpoints: {
					  240: {
						slidesPerView: 1,
						spaceBetween: 10,
					  },
					  768: {
						slidesPerView: 1,
						spaceBetween: 10,
					  },
					  1024: {
						slidesPerView: 1,
						spaceBetween: 10,
					  },
					  1200: {
						slidesPerView: 1,
						spaceBetween: 15,
					  },							  
					},						   
				});
				
			var witrbslick = $('.h2slider_act');		
				if(witrbslick.length > 0){
				witrbslick.slick({
					infinite: true,
					autoplay: true,
					default: true,
					autoplaySpeed: 3000,
					speed: 1000,					
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
				}
				
			/*==== brand active ====*/
			
			var witrbslick = $('.brand_active');
								
				if(witrbslick.length > 0){
				witrbslick.slick({
					infinite: true,
					autoplay: true,
					default: true,
					autoplaySpeed: 3000,
					speed: 1000,					
					slidesToShow: 5,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 5,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
				}
				
				/*==== team js active ====*/
				
				var witrbslick = $('.team_act');
								
				if(witrbslick.length > 0){
			
				witrbslick.slick({
					infinite: true,
					autoplay: true,
					default: true,
					autoplaySpeed: 3000,
					speed: 1000,					
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
				}	
			/*==== project active ====*/
			
			var witrbslick = $('.proj_act');				
				if(witrbslick.length > 0){
				witrbslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 6000,
					speed: 2000,					
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
					dots:true,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
				}
					
			/*==== blog active ====*/
			var witrbslick = $('.blog_active');				
				if(witrbslick.length > 0){
				witrbslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 6000,
					speed: 2000,					
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
					dots:true ,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
				}
				
			/*==== blog sidebar active ====*/
			$('.blog_sidebar_image_act').slick({	
				infinite: true,
				autoplay: true,
				autoplaySpeed: 3000,
				speed: 1000,					
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '',					
				arrows: false,
				dots: false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
					]
				});
				
			/*==== testimonial active ====*/
			
			var witrbtslick = $('.test_active');				
			if(witrbtslick.length > 0){
			witrbtslick.slick({
				infinite: true,
				autoplay: true,
				slidesToShow:2,
				spaceBetween: 10,
				autoplaySpeed: 6000,
				speed: 2000,					
				slidesToScroll: 1,
				arrows:true ,
				dots:true ,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
					]
				});
			}
				  
			/*==== portfolio isotop ====*/
			
			$('.portfolio_active').imagesLoaded( function() {
				if ($.fn.isotope) {

					var $portfolio = $('.portfolio_active');

					$portfolio.isotope({

						itemSelector: '.grid-item',

						filter: '*',

						resizesContainer: true,

						layoutMode: 'masonry',

						transitionDuration: '0.8s'

					});

					$('.filter_menu li').on('click', function() {

						$('.filter_menu li').removeClass('current_menu_item');

						$(this).addClass('current_menu_item');

						var selector = $(this).attr('data-filter');

						$portfolio.isotope({

							filter: selector,

						});

					});

				};
			});
				
			/*==== Mouse Direction Hover Iffect ====*/
			
			$('.single_protfolio').directionalHover();
			$('.single_protfolio').directionalHover({
				overlay: "em_port_content",
				easing: "swing",
				speed: 50
			});	
			
			/*==== Bootstrap Accordion  ====*/
			
			$('.faq-part .card').each(function () {
				var $this = $(this);
				$this.on('click', function (e) {
					var has = $this.hasClass('active');
					$('.faq-part .card').removeClass('active ');
					$('.faq-part .collapse').removeClass(' show');
					if (has) {
						$this.removeClass('active ');
					} else {
						$this.addClass('active ');
					}
				});
			});
			
			/*==== counter active ====*/
			$('.counter').counterUp({
				delay: 20,
				time: 3000
			});

})(jQuery);




