var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	$( document ).ready(function() {
		$('.table-filter, .table-sort').each(function() {
			var TableController = new JACKNIFE.TableController($(this));
			TableController.init();
			$(this).data('TableController', TableController);
		});
	});
})( jQuery );