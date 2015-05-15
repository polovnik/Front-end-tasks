$(function(){
	scaleBox();
});

function scaleBox(){
	$(".btn").mousedown(function(){
		$('#wrapper').mousemove(function(e){
			var pos = $('.box').offset();
			var posLeft = pos.left;
			var posTop = pos.top;
			var coordX = e.pageX - posLeft;
			var coordY = e.pageY - posTop;
			
			$('.box').css('width', coordX);// add checking if width is less than max width
			$('.box').css('height', coordY);// the same to height
	}).mouseup(function(){
		$(this).unbind("mousemove");
		})
	});
	$('html').mouseup(function(){
		$('#wrapper').unbind("mousemove");
	});
}
