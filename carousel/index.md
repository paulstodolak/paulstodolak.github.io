---
layout: default
---

# Hello Carousel
[back]({{ site.url }}/)

## Description
- Dot Navigation
- Thumb Navigation
- Crossfade Animation

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies
- jQuery
- Fontawesome

## Options

## Code
Basic Carousel
```html
<div class="carousel">
	<div class="carousel-nav carousel-thumb-nav">
		<a class="carousel-prev" href="#">
			<span class="fa fa-angle-left" aria-hidden="true"></span>
			<span class="sr-only">Previous</span>
		</a>
		<div class="carousel-thumbs">
			<ul>
				<li>
					<img src="../../../images/300-200_01.jpg" alt="" />
				</li>
				<li>
					<img src="../../../images/300-200_02.jpg" alt="" />
				</li>
				<li>
					<img src="../../../images/300-200_03.jpg" alt="" />
				</li>
				<li>
					<img src="../../../images/300-200_04.jpg" alt="" />
				</li>
				<li>
					<img src="../../../images/300-200_05.jpg" alt="" />
				</li>
				<li>
					<img src="../../../images/300-200_06.jpg" alt="" />
				</li>
				<li>
					<img src="../../../images/300-200_07.jpg" alt="" />
				</li>
				<li>
					<img src="../../../images/300-200_08.jpg" alt="" />
				</li>
				<li>
					<img src="../../../images/300-200_09.jpg" alt="" />
				</li>
				<li>
					<img src="../../../images/300-200_10.jpg" alt="" />
				</li>
			</ul>
		</div>
		<a class="carousel-next" href="#">
			<span class="fa fa-angle-right" aria-hidden="true"></span>
			<span class="sr-only">Next</span>
		</a>
	</div>
</div>
```
Thumb Carousel
```html
<div class="carousel banner">
	<div class="carousel-slides">
		<ul>
			<li class="active" data-slide="0">
				<div class="banner-bg">
					<video loop="" muted="" autoplay="" poster="../../../images/1920-1080_01.jpg">
						<source src="../../../videos/1920-1080.webm" type="video/webm">
						<source src="../../../videos/1920-1080.mp4" type="video/mp4">
					</video>
				</div>
			</li>
			<li data-slide="1">
				<div class="banner-bg">
					<img src="../../../images/1920-1080_02.jpg" alt="" />
				</div>
			</li>
			<li data-slide="2">
				<div class="banner-bg">
					<img src="../../../images/1920-1080_03.jpg" alt="" />
				</div>
			</li>
			<li data-slide="3">
				<div class="banner-bg">
					<img src="../../../images/1920-1080_04.jpg" alt="" />
				</div>
			</li>
			<li data-slide="4">
				<div class="banner-bg">
					<img src="../../../images/1920-1080_05.jpg" alt="" />
				</div>
			</li>
			<li data-slide="5">
				<div class="banner-bg">
					<img src="../../../images/1920-1080_06.jpg" alt="" />
				</div>
			</li>
			<li data-slide="6">
				<div class="banner-bg">
					<img src="../../../images/1920-1080_07.jpg" alt="" />
				</div>
			</li>
			<li data-slide="7">
				<div class="banner-bg">
					<img src="../../../images/1920-1080_08.jpg" alt="" />
				</div>
			</li>
			<li data-slide="8">
				<div class="banner-bg">
					<img src="../../../images/1920-1080_09.jpg" alt="" />
				</div>
			</li>
			<li data-slide="9">
				<div class="banner-bg">
					<img src="../../../images/1920-1080_10.jpg" alt="" />
				</div>
			</li>
		</ul>
	</div>
	<div class="carousel-nav carousel-thumb-nav">
		<a class="carousel-prev" href="#">
			<span class="fa fa-angle-left" aria-hidden="true"></span>
			<span class="sr-only">Previous</span>
		</a>
		<div class="carousel-thumbs">
			<ul>
				<li class="active" data-slide="0">
					<img src="../../../images/300-200_01.jpg" alt="" />
				</li>
				<li data-slide="1">
					<img src="../../../images/300-200_02.jpg" alt="" />
				</li>
				<li data-slide="2">
					<img src="../../../images/300-200_03.jpg" alt="" />
				</li>
				<li data-slide="3">
					<img src="../../../images/300-200_04.jpg" alt="" />
				</li>
				<li data-slide="4">
					<img src="../../../images/300-200_05.jpg" alt="" />
				</li>
				<li data-slide="5">
					<img src="../../../images/300-200_06.jpg" alt="" />
				</li>
				<li data-slide="6">
					<img src="../../../images/300-200_07.jpg" alt="" />
				</li>
				<li data-slide="7">
					<img src="../../../images/300-200_08.jpg" alt="" />
				</li>
				<li data-slide="8">
					<img src="../../../images/300-200_09.jpg" alt="" />
				</li>
				<li data-slide="9">
					<img src="../../../images/300-200_10.jpg" alt="" />
				</li>
			</ul>
		</div>
		<a class="carousel-next" href="#">
			<span class="fa fa-angle-right" aria-hidden="true"></span>
			<span class="sr-only">Next</span>
		</a>
	</div>
</div>
```
Banner Carousel
```html
<section class="carousel banner">
	<div class="carousel-slides">
		<ul>
			<li class="active" data-slide="0">
				<div class="banner-bg">
					<video loop="" muted="" autoplay="" poster="../../../images/1920-1080_01.jpg">
						<source src="../../../videos/1920-1080.webm" type="video/webm">
						<source src="../../../videos/1920-1080.mp4" type="video/mp4">
					</video>
				</div>
				<div class="container">
					<div class="banner-copy">
						<h1>Sollicitudin tempor id eu</h1>
						<h2>Risus in hendrerit gravida</h2>
					</div>
				</div>
			</li>
			<li data-slide="1">
				<div class="banner-bg">
					<img src="../../../images/1920-1080_02.jpg" alt="" />
				</div>
				<div class="container">
					<div class="banner-copy">
						<h2>Pellentesque adipiscing commodo elit</h2>
						<h3>In egestas erat imperdiet</h3>
					</div>
				</div>
			</li>
			<li data-slide="2">
				<div class="banner-bg">
					<img src="../../../images/1920-1080_03.jpg" alt="" />
				</div>
				<div class="container text-center">
					<div class="banner-copy">
						<h2>Sit amet massa vitae</h2>
					</div>
				</div>
			</li>
			<li data-slide="3">
				<div class="banner-bg">
					<img src="../../../images/1920-1080_04.jpg" alt="" />
				</div>
			</li>
		</ul>
	</div>
	<div class="carousel-nav carousel-dot-nav">
		<ul>
			<li class="active" data-slide="0">
				<span></span>
				<span class="sr-only">First slide</span>
			</li>
			<li data-slide="1">
				<span></span>
				<span class="sr-only">Second slide</span>
			</li>
			<li data-slide="2">
				<span></span>
				<span class="sr-only">Third slide</span>
			</li>
			<li data-slide="3">
				<span></span>
				<span class="sr-only">Forth slide</span>
			</li>
		</ul>
	</div>
</section>
```
CSS
```sass
.banner {
	position: relative;
	background-color: $black;
	color: $white;
	padding: 0;
	.container {
		position: absolute;
		top: 50%;
		right: 50%;
		width: 100%;
		height: 100%;
		@include transform(translate(50%, -50%));
	}
	.banner-bg {
		img,
		video {
			display: block;
			width: 100%;
			height: auto;
		}
	}
	.banner-copy {
		padding: 0 1.25rem;
		width: 100%;
		box-sizing: border-box;
		position: absolute;
		top: 50%;
		right: 50%;
		@include transform(translate(50%, -50%));
		h1, h2, h3, h4, h5, h6 {
			line-height: 1;
			clear: both;
			margin: 0;
		}
	}
}

#Hero.banner {
	.banner-copy {
		h1 {
			font-size: 4.5rem;
		}
		h2 {
			font-size: 3.25rem;
		}
	}
}

.carousel {
	background-color: $black;
	color: $white;
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	.carousel-slides {
		background: $black;
		color: $white;
		padding: 56.25% 0 0 0;
		width: 100%;
		height: 0;
		overflow: hidden;
		li {
			transition: all 0.5s ease-in-out;
			opacity: 0;
			pointer-events: none;
			position: absolute;
			width: 100%;
			height: 100%;
			top: 50%;
			right: 50%;
			@include transform(translate(50%, -50%));
			&.active {
				opacity: 1;
				pointer-events: auto;
			}
			.banner-bg {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 50%;
				right: 50%;
				@include transform(translate(50%, -50%));
			}
		}
	}
	.carousel-nav {
		position: relative;
		right: 50%;
		box-sizing: border-box;
		padding: 0 1.25rem;
		@include transform(translate(50%, 0));
		li {
			display: inline-block;
			margin-right: 0.25rem;
			&:last-child {
				margin-right: 0;
			}
			&:hover {
				cursor: pointer;
			}
		}
		.carousel-prev,
		.carousel-next {
			color: $white;
			width: 4.375rem;
			height: 100%;
			position: absolute;
			top: 50%;
			@include transform(translate(0, -50%));
			.fa {
				font-size: 4.5rem;
				position: absolute;
				top: 50%;
				right: 50%;
				@include transform(translate(50%, -50%));
			}
		}
		.carousel-prev {
			left: 0;
		}
		.carousel-next {
			right: 0;
		}
	}
	.carousel-thumb-nav {
		width: 100%;
		padding: 0 4.375rem;
		box-sizing: border-box;
		.carousel-thumbs {
			overflow: hidden;
			position: relative;
		}
		ul {
			height: 200px;
			width: 200%;
			position: relative;
			li {
				float: left;
				width: 300px;
				height: 200px;
				margin: 0;
				a {
					width: 100%;
					height: 100%;
					overflow: hidden;
					display: block;
					position: relative;
					top: 50%;
					right: 50%;
					@include transform(translate(50%, -50%));
					img {
						width: 100%;
						height: auto;
						position: relative;
						top: 50%;
						right: 50%;
						@include transform(translate(50%, -50%));
					}
				}
			}
		}
	}
	.carousel-dot-nav {
		position: absolute;
		bottom: 1.25rem;
		li {
			span:first-child {
				display: block;
				width: 10px;
				height: 10px;
				border-radius: 10px;
				border: 2px solid $white;
			}
			&:hover,
			&.active {
				span:first-child {
					background-color: $white;
				}
			}
		}
	}
}
```
JS
```javascript
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
```
App JS
```javascript
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
```

## Examples
- [Example 01](examples/01)
- [Example 02](examples/02)
- [Example 03](examples/03)

## Known Issues
- No slide animation

## Browser Support

## License

[back]({{ site.url }}/)