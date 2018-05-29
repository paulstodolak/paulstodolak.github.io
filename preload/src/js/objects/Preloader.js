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