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
			list.each(function(index) {

				//Set red color on first element of list
				// var firstEl = $(this).children().first(); 
				// firstEl.css('color','red');
				
				var allLi = $(this).children(); // find all 'li' elements
				allLi.each(function(index) {		
					var li = $(this)
					//Set red color on first element of list
					if (li.index() == 0) {
						li.css('color','red');
					}

					//remove all classes '.active' from li elements and set it to click element
					li.click(function() {
						allLi.removeClass('.active')
						li.addClass('.active')	
					})

					//Add index before text for each even elements in list
					if (li.index() % 2 == 0){
						li.prepend(index + ' ')
					}
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
	
