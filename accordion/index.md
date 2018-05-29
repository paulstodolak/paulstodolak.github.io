---
layout: default
---

# Hello Accordion
[back]({{ site.url }}/)

## Description
Can open or close Accordions inside or outside of the element structure of the Accordion

- Open Accordion
- Close Accordion
- Toggle Accordion
- Open All Accordions
- Close All Accordions

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies
- jQuery

## Options

## Code

App JS
```javascript
var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	$( document ).ready(function() {

		// Initialize Accordions
		$('.accordion').each(function() {
			var Accordion = new JACKNIFE.Accordion($(this));
			Accordion.init();
			// Store Object in Element Data for later reference
			$(this).data('Accordion', Accordion);
		});

		// Global control to open all Accordions
		$('[data-acc-all-open').each(function() {
			$(this).on('click', function() {
				$(window).trigger('acc-all-open');
			});
		});

		// Global control to close all Accordions
		$('[data-acc-all-close').each(function() {
			$(this).on('click', function() {
				$(window).trigger('acc-all-close');
			});
		});

	});
})( jQuery );
```

Accordion JS
```javascript
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
```

Accordion HTML
```html
<div class="accordion">
	<div data-acc-toggle>
		<p>Trigger</p>
	</div>
	<div data-acc-target>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed. Scelerisque purus semper eget duis at tellus at. Semper eget duis at tellus at urna condimentum mattis. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Arcu non odio euismod lacinia at. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. In hendrerit gravida rutrum quisque non tellus orci ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Sagittis orci a scelerisque purus semper. Nulla facilisi cras fermentum odio eu feugiat pretium. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. At quis risus sed vulputate odio ut. Facilisis sed odio morbi quis commodo. Vitae tortor condimentum lacinia quis vel. Ac tincidunt vitae semper quis. Sem fringilla ut morbi tincidunt augue. Habitant morbi tristique senectus et. Purus in mollis nunc sed id semper risus. Velit aliquet sagittis id consectetur purus ut.</p>
		<p>Rhoncus aenean vel elit scelerisque. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Elit duis tristique sollicitudin nibh sit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Consequat semper viverra nam libero justo laoreet sit amet. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Mauris augue neque gravida in fermentum. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Tincidunt dui ut ornare lectus sit. Molestie nunc non blandit massa enim nec dui nunc. Lobortis feugiat vivamus at augue eget arcu dictum. Ut eu sem integer vitae justo eget magna fermentum iaculis. In dictum non consectetur a erat nam at lectus urna.</p>
	</div>
</div>
```

Accordion SASS
```sass
[data-acc-toggle] {
	&:hover {
		cursor: pointer;
	}
}

.accordion {
	position: relative;
	[data-acc-target] {
		display: none;
	}
	&.active {
		[data-acc-target] {
			display: block;
		}
	}
}
```

## Examples
- [Example 01](examples/01)

## Known Issues
- Adding multiple data attributes to an Element may cause the Accordion to open and close immediately
- Opening an accordion does not ensure the content is on screen

## Browser Support

## License

[back]({{ site.url }}/)