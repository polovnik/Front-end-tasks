$(function(){
	controlGallery();
})
function controlGallery(){
	createPaginationButton();
	function createPaginationButton(){
		$('<div class="control"><ul class="gallery-list">').appendTo(".gallery-block"); // build slider control block
		$(".gallery > li").each(function(index){
			$(this).addClass("gallery" + $(this).index());
		});
		$(".gallery").each(function(){ // build pagination buttons
			var obj = $(this).parent();
			var liItems = $(this).children();
			var galleryList = $(this).parent().siblings().children();
			var i
			for (i=1; i<=liItems.length; i++) {
				$("<li><a href='#'>").appendTo(galleryList);
			}
		});
		$(".gallery-list").find("li").each(function(index){
			var index = $(this).index();
			$(this).attr("rel", index);
			$(this).children().html(index + 1);
		});
		$(".gallery-list").find("li:first-child").addClass("on"); // set active first gallery element
	};
	function slider (obj, sl) { // slider function
		var ul = $(sl).find(".gallery");
		var bl = $(sl).find("li.gallery" + obj);
		var step = $(bl).width();
		$(ul).animate({marginLeft: "-" + step * obj}, 500);
	};
	$(".gallery-list > li").on("click", function() { // slider click navigate
		var sl = $(this).closest(".gallery-block");
		$(sl).find("li").removeClass("on");
		$(this).addClass("on");
		var obj = $(this).attr("rel");
		slider(obj, sl);
		return false;
	});
}
