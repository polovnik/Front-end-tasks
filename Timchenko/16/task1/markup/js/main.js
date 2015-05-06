$(document).ready(function(){
	setHeight();

	function setHeight(){
		$('.container').each(function(index){
			var boxes = $(this).find('.box');
			if(!boxes.length){
				return false;
			}
			//console.log('container ' + index)
			var maxHeight = boxes.first().height();
			//console.log('boxes', boxes)
			//console.log('start maxHeight', maxHeight)
			boxes.each(function(){
				var currentHeight = $(this).height()
				if(currentHeight > maxHeight){
					maxHeight = currentHeight;
				}
			})
			console.log('maxHeight: ', maxHeight);
			boxes.height(maxHeight);
		})
	}
	
	$(window).resize(setHeight)
})
	
