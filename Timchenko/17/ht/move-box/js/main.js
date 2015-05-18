$(function(){
	moveBlock();
	
	function moveBlock(){
		var wrapper = $('#wrapper');
		var box = $('.box');
		var wrapPosLeft = wrapper.offset().left;
		var wrapPosTop = wrapper.offset().top;
		var boxPosLeft = box.offset().left;
		var boxPosTop = box.offset().top;
		var newBoxPosLeft;
		var newBoxPosTop;
		var pos;
		var elem_left;
		var elem_top;
		var Xinner;
		var Yinner;

		box.on('mousedown', function() {
			wrapper.on('mousemove', newPosition)
		});
		box.on('mouseup', function() {
			wrapper.off('mousemove', newPosition)
		});
		$(window).on('mouseup', function(){
			wrapper.off("mousemove", newPosition)
		});

		function newPosition(e) {
			// положение элемента
			pos = $(this).offset();
			elem_left = pos.left;
			elem_top = pos.top;
			// положение курсора внутри элемента
			Xinner = e.pageX - elem_left;
			Yinner = e.pageY - elem_top;
			console.log('Xinner ' + Xinner)
			console.log('Yinner ' + Yinner)

			newBoxPosLeft = (boxPosLeft + Xinner) - (box.width() / 2);
			newBoxPosTop = (boxPosTop + Yinner) - (box.height() / 2) ;

			if (newBoxPosLeft >= wrapper.width() - box.width() + boxPosLeft){
				newBoxPosLeft = wrapper.width() - box.width() + boxPosLeft;
			} else if (newBoxPosTop >= wrapper.height() - box.height() + boxPosTop){
				newBoxPosTop = wrapper.height() - box.height() + boxPosTop;
			} else if (newBoxPosLeft <= wrapPosLeft){
				newBoxPosLeft = wrapPosLeft;
			} else if (newBoxPosTop <= wrapPosTop){
				newBoxPosTop = wrapPosTop;
			};

			console.log('x ' + newBoxPosLeft)
			console.log('y ' + newBoxPosTop)
			console.log('x wrap ' + wrapPosLeft)
			console.log('y wrap ' + wrapPosTop)
			console.log('wrapper w' + wrapper.width())
			console.log('wrapper y' + wrapper.height())
			console.log('box w' + box.width())
			console.log('box y' + box.height())
			box.offset({ top: newBoxPosTop, left: newBoxPosLeft })
		};
	};
	$(window).resize(function() {
		moveBlock();
	});
});








