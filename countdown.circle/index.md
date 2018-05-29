---
layout: default
---

# Hello Circle Countdown
[back]({{ site.url }}/)

## Description
Displays a countdown using a specific start time which displays a message once time expires
- Includes optional Days/Hours/Minutes/Seconds timer
- Launches event when time expires
- Circle animation

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies
- jQuery
- progressbar.min.js (https://kimmobrunfeldt.github.io/progressbar.js/)

## Options

## Code
JS
```javascript
var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	$( document ).ready(function() {
		// Initialize the objects
		$('.circle-countdown').each(function() {
			var CircleCountdown = new JACKNIFE.CircleCountdown($(this));
			CircleCountdown.init();
			$(this).data('CircleCountdown', CircleCountdown);
		});
	});
})( jQuery );
```
JS
```javascript
var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	var CircleCountdown = JACKNIFE.CircleCountdown = function CircleCountdown(el) {
		// Elements
		var $el          = el;
		var $dayCount    = $('#CountdownDays .timer-count', $el);
		var $hourCount   = $('#CountdownHours .timer-count', $el);
		var $minuteCount = $('#CountdownMinutes .timer-count', $el);
		var $secondCount = $('#CountdownSeconds .timer-count', $el);

		// Variables
		var targetStart  = $el.data('start-time');
		var targetEnd    = $el.data('end-time');
		var startDate    = new Date(targetStart).getTime();
		var endDate      = new Date(targetEnd).getTime();
		var duration     = endDate - startDate;
		var timeInterval = null;

		var DayBar       = null;
		var HourBar      = null;
		var MinuteBar    = null;
		var SecondBar    = null;
		var DayColour    = '#FF8A3D';
		var HourColour   = '#FF8A3D';
		var MinuteColour = '#FF8A3D';
		var SecondColour = '#FF8A3D';
		var BGColour     = "#000000"

		// Public Functions
		this.init = function() {
			
			if ($el.hasClass('countdown-complete')) {
				_refreshMessage();
				return;
			}

			// Apply listeners
			timeInterval = setInterval(_updateTime, 1000);

			DayBar = new ProgressBar.Circle(CountdownDays, {
				strokeWidth: 2,
				color: DayColour,
				trailColor: BGColour,
				trailWidth: 2
			});

			HourBar = new ProgressBar.Circle(CountdownHours, {
				strokeWidth: 2,
				color: HourColour,
				trailColor: BGColour,
				trailWidth: 2
			});

			MinuteBar = new ProgressBar.Circle(CountdownMinutes, {
				strokeWidth: 2,
				color: MinuteColour,
				trailColor: BGColour,
				trailWidth: 2
			});
			
			SecondBar = new ProgressBar.Circle(CountdownSeconds, {
				strokeWidth: 2,
				color: SecondColour,
				trailColor: BGColour,
				trailWidth: 2
			});

			return;
		}

		// Private Functions
		var _updateTime = function(e) {
			var now      = new Date().getTime();
			var distance = endDate - now;
			var progress = null;

			// Time calculations for days, hours, minutes and seconds
			var days    = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Update Day progress bar
			progress = (now - startDate) / duration;
			progress = (progress).toFixed(3);
			DayBar.set(progress);
			$dayCount.html(days);

			// Update Hour progress bar
			progress = 24 - hours;
			progress = (progress / 24).toFixed(3);
			HourBar.set(progress);
			$hourCount.html(hours);

			// Update Minute progress bar
			progress = 60 - minutes;
			progress = (progress / 60).toFixed(3);
			MinuteBar.set(progress);
			$minuteCount.html(minutes);

			// Update Second progress bar
			progress = 60 - seconds;
			progress = (progress / 60).toFixed(3);
			SecondBar.set(progress);
			$secondCount.html(seconds);

			if (distance < 0) {
				clearInterval(timeInterval);
				$el.addClass('countdown-complete');
			}
		}

		var _refreshMessage = function() {
			// Countdown Completed
		}
	}
})( jQuery );
```
CSS
```sass
.countdown {
	&.countdown-complete {
		.countdown-timer {
			display: none;
		}
	}
	.countdown-int {
		@extend %clearfix;
		display: block;
		position: relative;
		right: 50%;
		@include transform(translate(50%, 0));
	}
	.countdown-timer {
		float: left;
		margin: 1rem 0.5rem;
		position: relative;
		.timer-int {
			.timer-count {
				color: inherit;
				font-size: 2.5rem;
				line-height: 1;
				display: block;
			}
			> span {
				font-size: 1rem;
				font-weight: normal;
				color: inherit;
			}
		}
	}
}

.countdown.circle-countdown {
	max-height: 7.5rem;
	height: 7.5rem;
	.countdown-timer {
		width: 5.75rem;
		height: 5.75rem;
		.timer-int {
			text-align: center;
			position: absolute;
			top: 50%;
			right: 50%;
			@include transform(translate(50%, -50%));
		}
	}
}
```
HTML
```html
<div class="countdown circle-countdown" data-start-time="June 10, 2017 10:00:00" data-end-time="December 10, 2017 17:00:00">
	<div class="countdown-int">
		<div id="CountdownDays" class="countdown-timer">
			<div class="timer-int">
				<span class="timer-count">0</span>
				<span>Days</span>
			</div>
		</div>
		<div id="CountdownHours" class="countdown-timer">
			<div class="timer-int">
				<span class="timer-count">0</span>
				<span>Hours</span>
			</div>
		</div>
		<div id="CountdownMinutes" class="countdown-timer">
			<div class="timer-int">
				<span class="timer-count">0</span>
				<span class="desktop-only">Minutes</span>
				<span class="mobile-only">Min</span>
			</div>
		</div>
		<div id="CountdownSeconds" class="countdown-timer">
			<div class="timer-int">
				<span class="timer-count">0</span>
				<span class="desktop-only">Seconds</span>
				<span class="mobile-only">Secs</span>
			</div>
		</div>
	</div>
</div>
```
## Examples
- [Example 01](examples/01)

## Known Issues
- Unique IDs necessary if multiple counters are required.

## Browser Support

## License

[back]({{ site.url }}/)