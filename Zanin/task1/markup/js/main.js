$(document).ready(function(){
	setHeight();
	setHeight2();

	function setHeight(){
		$('.container').each(function(index){
			var boxes = $(this).find('.box');
			if(!boxes.length){
				return false;
			}
			// console.log('container ' + index)
			var maxHeight = boxes.first().height();
			//console.log('boxes', boxes)
			//console.log('start maxHeight', maxHeight)
			boxes.each(function(){
				var currentHeight = $(this).height()
				if(currentHeight > maxHeight){
					maxHeight = currentHeight;
				}
			})
			console.log('maxHeightBox: ', maxHeight);
			boxes.height(maxHeight);
		})
	}
	
	function setHeight2(){
		$('.container').each(function(index){
			var blocks = $(this).find('.block');
			if(!blocks.length){
				return true;
			}
			var maxHeight = blocks.first().height();
			blocks.each(function(){
				var currentHeight = $(this).height();
				if(currentHeight > maxHeight){
					maxHeight = currentHeight;
				}
			})
			console.log('maxHeightBlock: ', maxHeight);
			blocks.height(maxHeight);
		})
	}

function setLi(){
		$('.list li:odd').each(function(){
			var li = $(this).index();
			console.log(li);
			$(this).prepend(li+1,' ');
		})
	}
	setLi()

	function clearForm(){
		var inputs = $('#form input');
		$('.btn-clean').click(function(e){
		e.preventDefault();
		inputs.filter(':text').val('');
		inputs.filter(':password').val('');
		// $('input[type="text"]').val('');
		// $('input[type="password"]').val('');
		});
	}
	clearForm();

	function clickLi(){
		$('.list li:first-child').css("color", "#f00");

		$(".list li").click(function(){
			$(this).addClass("active");
			$(this).siblings('li').removeClass("active");
			$('.active').css("color", "#390");
			$(".list li:not(.active)").css("color", "#000");
		});
	}

	clickLi()
	$(window).resize(setHeight)
})
	
