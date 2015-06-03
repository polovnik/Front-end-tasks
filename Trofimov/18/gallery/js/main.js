$(function(){
	paging();
})

function paging() {
	
	var galleryHold = $('.gallery-block');
	galleryHold.each(function(i, el){
		
		$(el).append('<div class="control"><a class="previous" href="#">Prev</a><ul></ul><a class="next" href="#">Next</a></div>');
		var gallery = $(el).find('.gallery');
		var pages = $(el).find('.control ul');
		gallery.children('li').each(function(i, el){
			pages.append('<li><a href="#">' + (i+1) + '</a></li>');
		})
		
		pages.find("li:first-child").addClass("active");
		
		pages.children().each(function(i, el) {
			$(el).click(function(){
				pages.children().removeClass("active");
				$(el).addClass("active");
				var marginL = i * -600;
				gallery.animate({marginLeft: marginL},"slow");
			})
		})
				
		$(el).find('.previous').click(function(){
			var activeLI = pages.children('.active');
			var indexActiveLI = pages.children().index(activeLI);
			var currentMargin = parseInt(gallery.css('marginLeft'));
			if (indexActiveLI > 0) {
				var parseMargin = currentMargin + 600 ;
				gallery.animate({marginLeft: parseMargin},"slow");
				pages.children().removeClass("active");
				pages.children().eq(indexActiveLI - 1).addClass("active");
			}
		})
				
		$(el).find('.next').click(function(){
			var activeLI = pages.children('.active');
			var indexActiveLI = pages.children().index(activeLI);
			var pageLength = pages.children('li').length;
			var currentMargin = parseInt(gallery.css('marginLeft'));
			if (indexActiveLI + 1 < pageLength) {
				var parseMargin = currentMargin - 600 ;
				gallery.animate({marginLeft: parseMargin},"slow");
				pages.children().removeClass("active");
				pages.children().eq(indexActiveLI + 1).addClass("active");
			}
			
			if (indexActiveLI + 1 == pageLength) {
				var firstLi = gallery.children("li:first-child");
				firstLi.clone().insertAfter(gallery.children("li:last-child"));
				var parseMargin = currentMargin - 600 ;
				gallery.animate({marginLeft: parseMargin},"slow",function(){
					gallery.css('marginLeft', '0px');
					pages.children().removeClass("active");
					pages.children().eq(0).addClass("active");
					gallery.children("li:last-child").remove();
				});
			}
		})
	})
}	

	
