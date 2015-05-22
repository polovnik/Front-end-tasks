$(document).ready(function(){
	setHeight();

	function setHeight(){
		$('.container').each(function(index){
			var boxes = $(this).find('.box');
			if(!boxes.length){
				return false;
			}
			var maxHeight = boxes.first().height();
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
	
