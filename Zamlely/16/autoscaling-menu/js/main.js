$(function(){
	autoMenu();
});

function autoMenu(){
	var liBlocks = $("#nav").children("li");
	var linksBackgroundWidth = $("#nav").find("a");
	var wrapperWidth = $("#wrapper").width();
	var borderLiWidth = liBlocks.outerWidth() - liBlocks.width()
	var maxLiWidth = (wrapperWidth/liBlocks.length)
	liBlocks.outerWidth(maxLiWidth);
	linksBackgroundWidth.outerWidth(maxLiWidth - borderLiWidth);
	
	// other code version
	/*var anchors = $("#nav").find("a");
	var liBlocks = $("#nav").children("li")
	var borderLiWidth = liBlocks.outerWidth() - liBlocks.width()
	var maxAnchorWidth = ($("#wrapper").width()/anchors.length);
	anchors.outerWidth(Math.floor(maxAnchorWidth) - borderLiWidth);*/
}













