var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	$( document ).ready(function() {
		$('.tabs').each(function() {
			var Tabs = new JACKNIFE.Tabs($(this));
			Tabs.init();
			$(this).data('Tabs', Tabs);
		});
	});
})( jQuery );