var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	var Tabs = JACKNIFE.Tabs = function Tabs(el) {
		// Elements
		var $el       = $(el);
		var $triggers = $('[data-tab-trigger]', $el);
		var $targets  = $('[data-tab-target]', $el);

		// Variables
		var activeIndex = 0;

		// Public Functions
		this.init = function() {
			activeIndex = $('.tab-trigger.active', $el).data('tab-trigger');

			// Apply listeners
			$triggers.on('click', _changeTab);

			return;
		}

		// Private Functions

		var _changeTab = function(e) {
			var target = $(this).data('tab-trigger');

			if (target === activeIndex) {
				return;
			}

			activeIndex = target;

			$triggers.removeClass('active');
			$targets.removeClass('active');

			$(this).addClass('active');
			$('[data-tab-target=' + target + ']', $el).addClass('active');

			e.preventDefault();
		}
	}
})( jQuery );