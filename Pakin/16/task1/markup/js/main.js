$(document).ready(function(){
	setHeight();
	setOuterHeight();
	setListSettings();
	cleanValue();

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

	function setOuterHeight(){
			$('.container').each(function(index){
			var block = $(this).find('.block');
			
			if(block.length){
				var maxHeight = block.first().height()
				block.each(function() {
					var currentHeight = $(this).height()
					if (currentHeight > maxHeight) {
						maxHeight = currentHeight;
					}
				})
				block.height(maxHeight);
			}
		});
	};
	
	function setListSettings(){
		$('.container').each(function(index) {
			var list = $(this).find('.list');
			
			//Set red color on first element of list
			list.each(function(index) {
				var firstEl = $(this).children().first();
				firstEl.css('color','red');

				//Add index before text for each even elements in list
				$(this).children().each(function(index) {
					var el = $(this)
					if (el.index() % 2 == 0){
						el.prepend(index + ' ')
					}

					el.click(function (){
						alert('My number is: ' + index)
					})
				});

			});
		});
	}

	function cleanValue() {
		var input = $('#form input');
		var textField = input.filter(':text')
		var passwordField= input.filter(':password')
		var cleanBtn = $('.btn-clean');

		cleanBtn.click(function (){
			if (textField.val().length || passwordField.val().length){
				textField.val('');
				passwordField.val('');
			}
			return false;   //this remove 'fly page on top'
		})
	}

	
});
	
