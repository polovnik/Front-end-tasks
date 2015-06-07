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
		//	$(el).css("zIndex", i + 1)
		})
		
		pages.find("li:first-child").addClass("active");
		
		pages.children().each(function(i, el) {
			$(el).click(function(){
				pages.children().removeClass("active");
				$(el).addClass("active");
				
				gallery.children('li').css("zIndex", 1);
				gallery.children('li').fadeTo(1000, 0);
								
				gallery.children('li').eq(i).css("zIndex", 2);
				gallery.children('li').eq(i).fadeTo(1000, 1);
			})
		})
	})
}	

	
