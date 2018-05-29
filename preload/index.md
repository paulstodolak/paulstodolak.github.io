---
layout: default
---

# Hello Preload
[back]({{ site.url }}/)

## Description

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies

## Options

## Code
HTML
```html
<div id="Preloader">
	<div class="container">
		<div class="preloader-logo">
			<svg version="1.1" class="preloader-circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="38px" height="38px" viewBox="0 0 38 38" enable-background="new 0 0 38 38" xml:space="preserve">
				<path fill="none" stroke-width="0.75" stroke-miterlimit="10" d="M37, 19c0-9.949-8.051-18-18-18S1, 9.051, 1, 19 s8.051, 18, 18, 18"></path>
			</svg>
		</div>
	</div>
</div>
<section>
	<div class="container">
		<img src="../../../images/300-200_01.jpg" alt="" />
		<img src="../../../images/300-200_02.jpg" alt="" />
		<img src="../../../images/300-200_03.jpg" alt="" />
		<img src="../../../images/300-200_04.jpg" alt="" />
		<img src="../../../images/300-200_05.jpg" alt="" />
		<img src="../../../images/300-200_06.jpg" alt="" />
		<img src="../../../images/300-200_07.jpg" alt="" />
		<img src="../../../images/300-200_08.jpg" alt="" />
		<img src="../../../images/300-200_09.jpg" alt="" />
		<img src="../../../images/300-200_10.jpg" alt="" />
		<img src="../../../images/500-250_01.jpg" alt="" />
		<img src="../../../images/500-250_02.jpg" alt="" />
		<img src="../../../images/500-250_03.jpg" alt="" />
		<img src="../../../images/500-250_04.jpg" alt="" />
		<img src="../../../images/500-250_05.jpg" alt="" />
		<img src="../../../images/500-250_06.jpg" alt="" />
		<img src="../../../images/500-250_07.jpg" alt="" />
		<img src="../../../images/500-250_08.jpg" alt="" />
		<img src="../../../images/500-250_09.jpg" alt="" />
		<img src="../../../images/500-250_10.jpg" alt="" />
		<img src="../../../images/500-500_01.jpg" alt="" />
		<img src="../../../images/500-500_02.jpg" alt="" />
		<img src="../../../images/500-500_03.jpg" alt="" />
		<img src="../../../images/500-500_04.jpg" alt="" />
		<img src="../../../images/500-500_05.jpg" alt="" />
		<img src="../../../images/500-500_06.jpg" alt="" />
		<img src="../../../images/500-500_07.jpg" alt="" />
		<img src="../../../images/500-500_08.jpg" alt="" />
		<img src="../../../images/500-500_09.jpg" alt="" />
		<img src="../../../images/500-500_10.jpg" alt="" />
		<img src="../../../images/1920-960_01.jpg" alt="" />
		<img src="../../../images/1920-960_02.jpg" alt="" />
		<img src="../../../images/1920-960_03.jpg" alt="" />
		<img src="../../../images/1920-960_04.jpg" alt="" />
		<img src="../../../images/1920-960_05.jpg" alt="" />
		<img src="../../../images/1920-960_06.jpg" alt="" />
		<img src="../../../images/1920-960_07.jpg" alt="" />
		<img src="../../../images/1920-960_08.jpg" alt="" />
		<img src="../../../images/1920-960_09.jpg" alt="" />
		<img src="../../../images/1920-960_10.jpg" alt="" />
		<div class="SAMPLE" data-preload style="background-image: url('../../../images/1920-1080_01.jpg');"></div>
		<div class="SAMPLE" data-preload style="background-image: url('../../../images/1920-1080_02.jpg');"></div>
		<div class="SAMPLE" data-preload style="background-image: url('../../../images/1920-1080_03.jpg');"></div>
		<div class="SAMPLE" data-preload style="background-image: url('../../../images/1920-1080_04.jpg');"></div>
		<div class="SAMPLE" data-preload style="background-image: url('../../../images/1920-1080_05.jpg');"></div>
		<div class="SAMPLE" data-preload style="background-image: url('../../../images/1920-1080_06.jpg');"></div>
		<div class="SAMPLE" data-preload style="background-image: url('../../../images/1920-1080_07.jpg');"></div>
		<div class="SAMPLE" data-preload style="background-image: url('../../../images/1920-1080_08.jpg');"></div>
		<div class="SAMPLE" data-preload style="background-image: url('../../../images/1920-1080_09.jpg');"></div>
		<div class="SAMPLE" data-preload style="background-image: url('../../../images/1920-1080_10.jpg');"></div>
		<img src="../../../images/1920-1280_01.jpg" alt="" />
		<img src="../../../images/1920-1280_02.jpg" alt="" />
		<img src="../../../images/1920-1280_03.jpg" alt="" />
		<img src="../../../images/1920-1280_04.jpg" alt="" />
		<img src="../../../images/1920-1280_05.jpg" alt="" />
		<img src="../../../images/1920-1280_06.jpg" alt="" />
		<img src="../../../images/1920-1280_07.jpg" alt="" />
		<img src="../../../images/1920-1280_08.jpg" alt="" />
		<img src="../../../images/1920-1280_09.jpg" alt="" />
		<img src="../../../images/1920-1280_10.jpg" alt="" />
	</div>
</section>
```
App JS
```javascript
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
```
```javascript
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
```
JS
```javascript
var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	var Preloader = JACKNIFE.Preloader = function Preloader(el) {
		// Elements
		var $el           = $(el);
		var $images       = $('img');
		var $bg_images    = $('[data-preload]');
		// Variables
		var image_length  = 0;
		var images_loaded = 0;

		// Public Functions
		this.init = function() {
			// Event Handlers

			// Collect the images that need to be preloaded
			$images.each(function() {
				if (!$(this).attr('src')) {
					return true;
				}else {
					image_length++;
				}
			});

			image_length += $bg_images.length;

			// If no images need to be preloaded, kill the loader
			if (image_length <= 0) {
				_trigger_destroy();
				return;
			}

			// Check if the images have already loaded
			$images.each(function() {
				if (!$(this).attr('src')) {
					return true;
				}

				var path = $(this).attr('src');

				var is_gif = (path.indexOf('.gif') >= 0) ? true : false;
				if (JACKNIFE.is_ie && is_gif === false) {
					// IE <=10 was not preloading .jpg and .png img elements.
					// Background image load method was used as an alternative.
					var image = new Image();

					image.onload = _loadImage;

					image.src = path;

					if (image.complete) {
						image.onload();
					}
				}else {
					$(this).on('load', _loadImage);
					if (this.complete) $(this).trigger('load');
				}
			});

			// Force Background images to load
			$bg_images.each(function(){_createBGImage($(this))});
		}

		// Private Functions
		var _loadImage = function(e) {
			// Disable listeners to prevent load from counting twice
			$(this).off();
			this.onload = null;

			// Increment loaded count
			images_loaded++;

			// Update loadbar
			_update();
		}

		var _createBGImage = function($bgimg) {
			// Force the background images to load
			var image = new Image();
			var path  = $bgimg.css('background-image');

			path = path.match(/\((.*?)\)/)[1].replace(/('|")/g,'');
			image.onload = _loadImage;

			image.src = path;

			if (image.complete) {
				image.onload();
			}
		}

		var _update = function() {
			// Update the preload progress
			var percent = images_loaded / image_length;
			percent = Math.round(percent * 100);

			if (percent === 100) {
				_trigger_destroy();
			}
		}

		var _trigger_destroy = function() {
			// Disable the listeners and trigger the destroy
			JACKNIFE.preloaded = true;

			$(document).trigger('preload_complete');
			$(document).off('preload_complete');

			$(window).scroll();
			$(window).resize();

			$el.fadeOut('slow', _destroy);
		}

		var _destroy = function() {
			// Remove the element
			$el.off();
			$el.remove();

			$images.off('load');
		}
	}
})( jQuery );
```
CSS
```sass
body.preloading {
	overflow: hidden;
}

#Preloader {
	position: absolute;
	width: 100%;
	height: 100%;
	background: $white;
	z-index: 100;
	.container {
		position: absolute;
		height: 100vh;
		width: 100%;
		.preloader-logo {
			width: 4.375rem;
			height: 4.375rem;
			position: fixed;
			top: 50%;
			right: 50%;
			@include transform(translate(50%, -50%));
			svg {
				width: 4.375rem;
				height: 4.375rem;
				box-sizing: border-box;
				position: absolute;
				top: 50%;
				right: 50%;
			}
			.svg-logo {
				padding: 5px;
				@include transform(translate(50%, -50%));
				path {
					fill: $black;
				}
			}
			.preloader-circle {
				margin-top: -50%;
				margin-right: -50%;
				@include animation(preload_animation 1.5s infinite linear);
				path {
					stroke: $black;
				}
			}
		}
	}
}

@keyframes preload_animation {
	0% { 
		transform: rotate(0deg);
	}
	100% { 
		transform: rotate(360deg);
	}
}
```
## Examples
- [Example 01](examples/01)

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)