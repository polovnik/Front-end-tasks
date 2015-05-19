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
	function colorRed(){
		$('.list li:first-child').css('color', 'red');
	}
	colorRed();
	function btnClean(){
		$('.btn-clean').click(function(){
			$('input[type="text"], input[type="password"]').val('');
		})
	}
	btnClean();
	function Number(){
		$('.list li:odd').each(function(i){
			$(this).prepend(i+1, '');
		})
	}
	 Number();
	 function ClickActive(){
	 	$('.list li').click(function(){
	 		$(this).addClass('active');
	 		$(this).removeClass('active');
	 	})
	 }
	 ClickActive();
})
	
