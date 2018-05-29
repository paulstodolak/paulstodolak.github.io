var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	var Countdown = JACKNIFE.Countdown = function Countdown(el) {
		// Elements
		var $el          = el;
		var $dayCount    = $('.countdown-timer-days .timer-count', $el);
		var $hourCount   = $('.countdown-timer-hours .timer-count', $el);
		var $minuteCount = $('.countdown-timer-minutes .timer-count', $el);
		var $secondCount = $('.countdown-timer-seconds .timer-count', $el);

		// Variables
		var targetStart  = $el.data('start-time');
		var targetEnd    = $el.data('end-time');
		var startDate    = new Date(targetStart).getTime();
		var endDate      = new Date(targetEnd).getTime();
		var duration     = endDate - startDate;
		var timeInterval = null;

		// Public Functions
		this.init = function() {
			
			if ($el.hasClass('countdown-complete')) {
				_refreshMessage();
				return;
			}

			// Apply listeners
			timeInterval = setInterval(_updateTime, 1000);

			return;
		}

		// Private Functions
		var _updateTime = function(e) {
			var now      = new Date().getTime();
			var distance = endDate - now;

			// Time calculations for days, hours, minutes and seconds
			var days    = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Update Days
			$dayCount.html(days);

			// Update Hours
			$hourCount.html(hours);

			// Update Minutes
			$minuteCount.html(minutes);

			// Update Seconds
			$secondCount.html(seconds);

			if (distance < 0) {
				clearInterval(timeInterval);
				$el.addClass('countdown-complete');
				_refreshMessage();
			}
		}

		var _refreshMessage = function() {
			// Countdown Completed
		}
	}
})( jQuery );