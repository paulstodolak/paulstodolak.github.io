var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	var Carousel = JACKNIFE.Carousel = function Carousel(el) {
		// Elements
		var $el         = $(el);
		var $navigation = $('.carousel-nav', $el);
		var $prev_btn   = $('.carousel-prev', $navigation);
		var $next_btn   = $('.carousel-next', $navigation);
		var $thumbs     = $('.carousel-thumbs ul', $navigation);
		var $thumb      = $('li', $thumbs);

		// Variables
		var index = 0;
		var limit = 0;

		// Public Functions
		this.init = function() {
			// Apply listeners
			$('[data-slide]', $navigation).on('click', _nav_click);

			if ($navigation.hasClass('carousel-thumb-nav')) {
				$prev_btn.on('click', _showPrevious);
				$next_btn.on('click', _showNext);
				$(window).on('resize', _resize);

				$(window).resize();
			}

			_nav_to(0);
			return;
		}

		// Private Functions
		var _nav_click = function(e) {
			e.preventDefault();

			var target = $(this).data('slide');
			_nav_to(target);
		}

		var _nav_to = function(target) {
			$('[data-slide]', $el).removeClass('active');
			var $target = $('[data-slide="' + target + '"]', $el);
			$target.addClass('active');
			if ($('video', $el).length) {
				var $videos = $('video', $el);
				$videos.each(function() {
					var $video = $(this).get(0);
					if (!$video.paused) {
						$video.pause();
					}
				});
			}
			if ($('video', $target).length) {
				var $video = $('video', $target).get(0);
				if ($video.paused) {
					$video.play();
				}
			}
		}

		var _showPrevious = function(e) {
			e.preventDefault();

			var carousel_width = $navigation.width();
			var position       = $thumbs.position().left;
			var thumbs_width   = $thumbs.width();
			var distance;

			if (limit <= 1) {
				return;
			}

			index--;
			if (index === -1) {
				index = limit -1;
			}else if (index < 0) {
				index = 0;
			}

			distance = carousel_width * index;

			$thumbs.css('left', -distance + 'px');
		}

		var _showNext = function(e) {
			e.preventDefault();

			var carousel_width = $navigation.width();
			var position       = $thumbs.position().left;
			var thumbs_width   = $thumbs.width();
			var distance;

			if (limit <= 1) {
				return;
			}

			index++;
			if (index === limit) {
				index = 0;
			}else if (index > limit - 1) {
				index = limit - 1;
			}

			distance = carousel_width * index;
			$thumbs.css('left', -distance + 'px');
		}

		var _resize = function(e) {
			var thumb_width    = $thumb.width();
			var target_width   = thumb_width * $thumb.length;
			var carousel_width = $navigation.width();
			var thumbs_width   = $thumbs.width();
			var distance       = carousel_width * index;
			var content_width  = $el.width() * $thumb.length;

			limit = target_width / $navigation.width();
			$thumbs.width(target_width);
			if (limit <= 1) {
				return;
			}

			if (index === -1 || index > limit - 1) {
				index = limit - 1;
			}else if (index < 0 || index === limit) {
				index = 0;
			}

			distance = carousel_width * index;

			$thumbs.css('left', -distance + 'px');
		}

	}
})( jQuery );