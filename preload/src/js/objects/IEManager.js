var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	var IEManager = JACKNIFE.IEManager = function IEManager() {
		// Public Functions

		this.init = function() {
			_detectIE();
		}

		// Private Functions
		var _detectIE = function() {
			// Detect browser for future flag use
			var ua = window.navigator.userAgent;

			var msie = ua.indexOf('MSIE ');
			var trident = ua.indexOf('Trident/');
			var edge = ua.indexOf('Edge/');
			if (msie > -1 || trident > -1 || edge > -1) {
				JACKNIFE.is_ie = true;
				return;
			}
		}
	}
})( jQuery );