'use_strict';

$(document).ready(function () {

	/*
	 * Initialize Jarallax.js and set globals.
	 */
	$('.jarallax').jarallax({
    	speed: 0.2
	});

	/**
	 * Initialize WoW.hs
	 */
	wow = new WOW ({
		// Options
		boxClass: 'wow',
      	animateClass: 'animated',
      	offset: 0,
      	mobile: true,
      	live: true
	});
	wow.init();

});