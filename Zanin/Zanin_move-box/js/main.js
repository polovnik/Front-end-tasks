$(function(){
	moveBlock();
	
	function moveBlock(){
		var box = $("div.box");
		box.mousedown(function(){
		$('#wrapper').mousemove(function(e){
			var pos = $('div.box').offset();
			var posLeft = pos.left;
			var posTop = pos.top;
			var coordX = e.pageX - posLeft;
			var coordY = e.pageY - posTop;

			box.offset({
			left: (posLeft + coordX),
			top: (posTop + coordY)
			});
	}).mouseup(function(){
		$(this).unbind("mousemove");
		})
	});
	$('html').mouseup(function(){
		$('#wrapper').unbind("mousemove");
	});
	}
})






