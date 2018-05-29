var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	$( document ).ready(function() {
		$('.carousel').each(function() {
			var Carousel = new JACKNIFE.Carousel($(this));
			Carousel.init();
			$(this).data('Carousel', Carousel);
		});
	});
})( jQuery );