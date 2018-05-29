var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	var Accordion = JACKNIFE.Accordion = function Accordion(el) {
		// Elements
		var $el = el;

		// Variables
		var id = ($el.attr('id')) ? $el.attr('id') : null;

		// Public Functions
		this.init = function() {
			// Apply listeners that effect all Accordions
			$(window).on('acc-all-open', _open);
			$(window).on('acc-all-close', _close);

			// Apply listeners to Elements targetting this Accordion
			if (id) {
				$('[data-acc-open="' + id + '"]').on('click', _open);
				$('[data-acc-close="' + id + '"]').on('click', _close);
				$('[data-acc-toggle="' + id + '"]').on('click', _toggle);
			}

			// Apply listeners to Elements inside Accordion
			$('[data-acc-open]', $el).on('click', _open);
			$('[data-acc-close]', $el).on('click', _close);
			$('[data-acc-toggle]', $el).on('click', _toggle);

			return;
		}

		// Private Functions
		var _toggle = function(e) {
			// Open or Close Accordion
			e.preventDefault();

			$el.toggleClass('active');
		}

		var _open = function(e) {
			// Open Accordion
			e.preventDefault();

			$el.addClass('active');
		}

		var _close = function(e) {
			// Close Accordion
			e.preventDefault();

			$el.removeClass('active');
		}
	}
})( jQuery );