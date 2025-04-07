/*============================================================
* Template Name    : Medical - Science One Page Html Template
* Author           : TechnoTheme Solution
* Version          : 1.0
* Created          : 14/Sep/2020;
* File Description : Main JS file of the template
===========================================================*/

/*====================== TABLE 
    1.PRELOADER
	2.COUNTER
	3.STICKY ADD
    4.SCROLL DOWN SPEED
	5.MENU-BAR TOGGLE
	6.ZOOM IMAGE
    7.SCROLL TOP SHOW
	8.SCROLL TOP CLICK EVENT
    9.BANNER CAROUSEL
	10.AUTO TYPE TEXT
	11.GALLERY FILTER
 ========================*/

(function($)  {
	"use strict"; // Start of use strict

	//GALLERY FILTER
	$('.gallery-filter li').click(function(){
		$('.gallery-filter li').removeClass('active');
			$(this).addClass('active');	  
			var data = $(this).attr('data-filter');
			$grid.isotope({
			filter: data
			})
		});	
		var $grid = $("#image-gallery-mix").isotope({
		  itemSelector: ".all",
		  masonry: {
			columnWidth: ".all"
		  }
		});

	
	
	// PRELOADER
    $(window).on('load', function() {
        $('#preloader').delay(3000).fadeOut('slow');
    });
	
	// COUNTER
    $('.about-box').appear(function() {
		$('.counter-number').countTo();
    });
	
	// STICKY ADD
	window.onscroll = function() {myFunction()};
	var header = document.getElementById("navigation");
	var sticky = header.offsetTop;
	function myFunction() {
	  if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	  } else {
		header.classList.remove("sticky");
	  }
	}
	
	// A SCROLL DOWN SPEED
	$('a.page-scroll , .icon_animate a').click(function(e) {
		var targetHref = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(targetHref).offset().top - 80
		}, 1250, 'easeInOutExpo');
		e.preventDefault();
	});
			
	// MENU-BAR TOGGLE
	$('.bar-toggler').on('click', function () {
		$('.menu-bar').toggleClass('active');
		$('.bar-toggler').toggleClass('change');
	});
	
    //ZOOM IMAGE
	$('.img-zoom').magnificPopup({
		type: 'image'
	});
	
    // SCROLL TOP SHOW
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//SCROLL TOP CLICK EVENT
	$('.scrollToTop').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//  BANNER CAROUSEL
	$('.slider-inner').owlCarousel({
		loop: false,
		margin: 0,
		autoplay: false,
		dots: false,
		nav: false,
		autoplayTimeout: 4000,
		smartSpeed: 1500,
		animateOut: 'fadeOut',
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1170: {
				items: 1
			}
		}
	});		
	
	// TYPES TEXT JS	
	var typed = new Typed('.typed', {
	  strings: ["Randevusu", "Tedavisi", "Nazarı"],
	  typeSpeed: 80,
	  startDelay: 1000,
	  backSpeed: 80,
	  backDelay: 3000,
	  loop: true,
	  cursorChar: "|",
	  showCursor: true
	});
	
	
	
})(jQuery);