$(document).ready(function() {


	;(function($){
		jQuery.fn.myGallery = function(){
			var options = $.extend({
				list: '1',
				slides: "li",
				duration: 20,
				mask: 'mask'
			}, options);

			var make = function() {
				console.log(this.list)
			}

			return this.each(make)

		};

	})(jQuery);
	
	$('.gallery-block:first').myGallery({
		list: '1',
		slides: '.gallery li',
		duration: 10,
		mask: 'gallery-holder'
	});
});


