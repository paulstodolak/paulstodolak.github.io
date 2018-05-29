---
layout: default
---

# Hello Tabs Controller
[back]({{ site.url }}/)

## Description

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
		// Initialize the objects
		$('.tabs').each(function() {
			var Tabs = new JACKNIFE.Tabs($(this));
			Tabs.init();
			$(this).data('Tabs', Tabs);
		});
	});
})( jQuery );
```
JS
```javascript
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
```
CSS
```sass
.tab-menu {
	padding: 0;
	@extend %clearfix;
	button {
		text-decoration: none;
		margin-right: 1.25rem;
		color: $black;
		display: block;
		float: left;
		position: relative;
		&:last-child {
			margin-right: 0;
		}
		&.active {
			opacity: 0.75;
		}
	}
}

.tab-content {
	display: none;
	&.active {
		display: block;
	}
}
```
HTML
```html
<div class="tabs">
	<menu class="tab-menu">
		<button class="tab-trigger active" data-tab-trigger="0">Lorem ipsum</button>
		<button class="tab-trigger" data-tab-trigger="1">Rhoncus aenean</button>
		<button class="tab-trigger" data-tab-trigger="2">Lorem ipsum</button>
		<button class="tab-trigger" data-tab-trigger="3">Rhoncus aenean</button>
	</menu>
	<div class="tab-content active" data-tab-target="0">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed. Scelerisque purus semper eget duis at tellus at. Semper eget duis at tellus at urna condimentum mattis. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Arcu non odio euismod lacinia at. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. In hendrerit gravida rutrum quisque non tellus orci ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Sagittis orci a scelerisque purus semper. Nulla facilisi cras fermentum odio eu feugiat pretium. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. At quis risus sed vulputate odio ut. Facilisis sed odio morbi quis commodo. Vitae tortor condimentum lacinia quis vel. Ac tincidunt vitae semper quis. Sem fringilla ut morbi tincidunt augue. Habitant morbi tristique senectus et. Purus in mollis nunc sed id semper risus. Velit aliquet sagittis id consectetur purus ut.</p>
		<p>Rhoncus aenean vel elit scelerisque. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Elit duis tristique sollicitudin nibh sit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Consequat semper viverra nam libero justo laoreet sit amet. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Mauris augue neque gravida in fermentum. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Tincidunt dui ut ornare lectus sit. Molestie nunc non blandit massa enim nec dui nunc. Lobortis feugiat vivamus at augue eget arcu dictum. Ut eu sem integer vitae justo eget magna fermentum iaculis. In dictum non consectetur a erat nam at lectus urna.</p>
	</div>
	<div class="tab-content" data-tab-target="1">
		<p>Rhoncus aenean vel elit scelerisque. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Elit duis tristique sollicitudin nibh sit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Consequat semper viverra nam libero justo laoreet sit amet. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Mauris augue neque gravida in fermentum. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Tincidunt dui ut ornare lectus sit. Molestie nunc non blandit massa enim nec dui nunc. Lobortis feugiat vivamus at augue eget arcu dictum. Ut eu sem integer vitae justo eget magna fermentum iaculis. In dictum non consectetur a erat nam at lectus urna.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed. Scelerisque purus semper eget duis at tellus at. Semper eget duis at tellus at urna condimentum mattis. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Arcu non odio euismod lacinia at. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. In hendrerit gravida rutrum quisque non tellus orci ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Sagittis orci a scelerisque purus semper. Nulla facilisi cras fermentum odio eu feugiat pretium. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. At quis risus sed vulputate odio ut. Facilisis sed odio morbi quis commodo. Vitae tortor condimentum lacinia quis vel. Ac tincidunt vitae semper quis. Sem fringilla ut morbi tincidunt augue. Habitant morbi tristique senectus et. Purus in mollis nunc sed id semper risus. Velit aliquet sagittis id consectetur purus ut.</p>
	</div>
	<div class="tab-content active" data-tab-target="2">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed. Scelerisque purus semper eget duis at tellus at. Semper eget duis at tellus at urna condimentum mattis. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Arcu non odio euismod lacinia at. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. In hendrerit gravida rutrum quisque non tellus orci ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Sagittis orci a scelerisque purus semper. Nulla facilisi cras fermentum odio eu feugiat pretium. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. At quis risus sed vulputate odio ut. Facilisis sed odio morbi quis commodo. Vitae tortor condimentum lacinia quis vel. Ac tincidunt vitae semper quis. Sem fringilla ut morbi tincidunt augue. Habitant morbi tristique senectus et. Purus in mollis nunc sed id semper risus. Velit aliquet sagittis id consectetur purus ut.</p>
		<p>Rhoncus aenean vel elit scelerisque. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Elit duis tristique sollicitudin nibh sit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Consequat semper viverra nam libero justo laoreet sit amet. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Mauris augue neque gravida in fermentum. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Tincidunt dui ut ornare lectus sit. Molestie nunc non blandit massa enim nec dui nunc. Lobortis feugiat vivamus at augue eget arcu dictum. Ut eu sem integer vitae justo eget magna fermentum iaculis. In dictum non consectetur a erat nam at lectus urna.</p>
	</div>
	<div class="tab-content" data-tab-target="3">
		<p>Rhoncus aenean vel elit scelerisque. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Elit duis tristique sollicitudin nibh sit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Consequat semper viverra nam libero justo laoreet sit amet. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Mauris augue neque gravida in fermentum. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Tincidunt dui ut ornare lectus sit. Molestie nunc non blandit massa enim nec dui nunc. Lobortis feugiat vivamus at augue eget arcu dictum. Ut eu sem integer vitae justo eget magna fermentum iaculis. In dictum non consectetur a erat nam at lectus urna.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed. Scelerisque purus semper eget duis at tellus at. Semper eget duis at tellus at urna condimentum mattis. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Arcu non odio euismod lacinia at. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. In hendrerit gravida rutrum quisque non tellus orci ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Sagittis orci a scelerisque purus semper. Nulla facilisi cras fermentum odio eu feugiat pretium. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. At quis risus sed vulputate odio ut. Facilisis sed odio morbi quis commodo. Vitae tortor condimentum lacinia quis vel. Ac tincidunt vitae semper quis. Sem fringilla ut morbi tincidunt augue. Habitant morbi tristique senectus et. Purus in mollis nunc sed id semper risus. Velit aliquet sagittis id consectetur purus ut.</p>
	</div>
</div>
```
## Examples
- [Example 01](examples/01)

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)