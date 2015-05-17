$(function(){
	autoMenu();
});

function autoMenu(){
	var navWidth = $("#nav").outerWidth();
	var navChilds = $("#nav").children();
	var navChildsNum = $(navChilds).length;
	
	var newWidthChilds = Math.floor(navWidth / navChildsNum);
	var modWidth = navWidth - (newWidthChilds * navChildsNum); //width for lastChild
	
	$("#nav li").outerWidth(newWidthChilds);
	$("#nav li:last-child").outerWidth(newWidthChilds + modWidth);	
	
	/* +
	$(navChilds).each(function(i){
		$(this).outerWidth(newWidthChilds);
		if (i == navChildsNum - 1) {
			$(this).outerWidth(newWidthChilds + modWidth);
		}
			console.log($(this).outerWidth());
	})
	*/
}













