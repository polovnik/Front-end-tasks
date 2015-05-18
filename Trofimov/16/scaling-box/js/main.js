$(function(){
	scaleBox();
});

function scaleBox(){
	var body = $('body');
	var wrap = $('#wrapper');
	var btn = $(".btn");
	var box = $(".box");
	var offsetLeft = box[0].offsetLeft;
	var offsetTop = box[0].offsetTop;
		
	btn.mousedown(function() {
						
		body.mousemove(function(e){
				var X = e.screenX;
				var Y = e.clientY;
				box.outerWidth(box.outerWidth() + (X - offsetLeft - box.outerWidth()));
				box.outerHeight(box.outerHeight() + (Y - offsetTop - box.outerHeight()));
				if ( box.outerWidth() > wrap.width() ) {
					box.outerWidth(wrap.width());
				}
			});
		});

	body.mouseup(function(){
		body.unbind('mousemove');
	});
}














