var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	$( document ).ready(function() {
		// Global Variables
		JACKNIFE.preloaded = false;
		JACKNIFE.is_ie     = false;

		// Detect browser for future flag use
		var IEManager = new JACKNIFE.IEManager();
		IEManager.init();

		// Preload images or trigger the preloaded state
		$preloader = $('#Preloader');
		if ($preloader.length) {
			var Preloader = new JACKNIFE.Preloader($preloader);
			Preloader.init();
			$preloader.data('Preloader', Preloader);
		}else {
			JACKNIFE.preloaded = true;
			$(document).trigger('preload_complete');
		}
		
	});
})( jQuery );