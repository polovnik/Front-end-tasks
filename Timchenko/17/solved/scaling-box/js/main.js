$(function(){
	scaleBox();
});

function scaleBox(){
	var btn = $('.btn');
	var boxWidth = $('.box').width();
	var boxHeight = $('.box').height();
	var coordEnterX = 0;
	var coordEnterY = 0;
	var flag;
	
	var maxWidth = btn.parent().parent().width();
	var maxHeight = $(window).height() - (btn.parent().parent().outerHeight() - btn.parent().parent().height());
	
	btn.mousedown(function(e){
		coordEnterX = parseInt(e.pageX);
		coordEnterY = parseInt(e.pageY);
		flag = true;
		return false;
	}).mouseup(function(){
		flag = false;
	});
	
	
	$(document).mousemove(function(e){
		if (flag){
			var difX = coordEnterX - parseInt(e.pageX);
			var difY = coordEnterY - parseInt(e.pageY);
			
			$('.box').width(boxWidth - difX > maxWidth ? maxWidth : boxWidth - difX);
			$('.box').height(boxHeight - difY > maxHeight ? maxHeight : boxHeight - difY);	
		}
	}).mouseup(function(){
		flag = false;
		boxWidth = $('.box').width();
		boxHeight = $('.box').height();
	});

}












