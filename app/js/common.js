(function() {

	var menuWrap = document.querySelector('.menu'),
		sliderWrap = document.querySelector('.slider'),
		btnMenu = document.querySelector('.navbar-toggle'),
		contentWrap = document.querySelector('.contentWrap'),
		navbar = document.querySelector('.navbar-nav'),
		navCollapse = document.querySelector('.navbar-collapse');

	/* Menu top when scrolling */

	window.addEventListener('resize', checking);
	window.addEventListener('scroll', checking);

	function checking() {
		var widthWindow = window.innerWidth,
			windowScroll = window.pageYOffset,
			elemTop = menuWrap.offsetTop;

		if(windowScroll >= 230 && widthWindow <= 767) {
			menuWrap.classList.add('fixedMenu');
			sliderWrap.classList.add('topChange');
		}

		if(menuWrap.classList.contains('fixedMenu') && windowScroll <= 229) {
			menuWrap.classList.remove('fixedMenu');
			sliderWrap.classList.remove('topChange');
		}
	}

	navbar.addEventListener('click', function(e) {
		if(window.innerWidth <= 767 && e.target.tagName == 'A') {
			btnMenu.classList.remove('collapsed');
			btnMenu.setAttribute('aria-expanded','false');
			navCollapse.classList.remove('in');
		}
	});

	/* Slider */

	$('.carousel').carousel({
	  interval: 4000,
	  pause: 'hover',
	  wrap: true
	});

	/* Modal priceList */

	$('.priceList').click(function(e) {
		$("#myModalBox").modal('show');
		e.preventDefault();

	});

	/* Modal slider */

	$('.item').click(function() {
		if(window.innerWidth >= 768) {
			$(this).ekkoLightbox();
		}
	});
	
})();