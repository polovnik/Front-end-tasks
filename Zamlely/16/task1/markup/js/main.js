$(document).ready(function(){
	setHeight();
	firstLiRedColor();
	setHeightYellowBlock();
	cleanBtnAction();
	liIndexPrepend();
	liActiveClass();

	function setHeight(){
		$('.container').each(function(index){
			var boxes = $(this).find('.box');
			if(!boxes.length){
				return false;
			}
			//console.log('container ' + index)
			//console.log("boxes.lenght = ", boxes.length)
			//console.log(boxes)
			var maxHeight = boxes.first().height();
			//console.log('boxes', boxes)
			//console.log('start maxHeight', maxHeight)
			boxes.each(function(){
				var currentHeight = $(this).height()
				if(currentHeight > maxHeight){
					maxHeight = currentHeight;
				}
			})
			//console.log('maxHeight: ', maxHeight);
			boxes.height(maxHeight);
		})
	}
	
	$(window).resize(setHeight);
	
	function setHeightYellowBlock() {
		var blocks = $(".container").children(".block");
		var maxHeight = blocks.first().height();// @todo: pay attention that paddings of blocks can be different (use outerHeight)
		blocks.each(function(){
			var currentHeight = $(this).height();
				if(currentHeight > maxHeight) {
					maxHeight = currentHeight;
				}
		});
		blocks.height(maxHeight);
	};
		
	function firstLiRedColor() {
		var firstLi = $("li:first-child");
		firstLi.css("color", "red");
	};
	
	function cleanBtnAction(){
		var cleanBtn = $(".btn-clean");
		var formArea = $("input[type='text'], input[type='password']");
		cleanBtn.click(function(){
			formArea.val("");
		});
	};
	
	/*$(".btn-clean").click(function(){
		$("input[type='text'], input[type='password']").val("")
	}); */ 

	function liIndexPrepend(){
		$(".container").find("li:odd").each(function(){
			var index = $(this).index(); //@todo index is a parameter in function-handler: .each(function(index)....
			$(this).prepend("№" + (index + 1) + " ");
		});
	};
	
	function liActiveClass(){
		$("li").click(function(){
			$(this).siblings(".active").removeClass();
			$(this).addClass("active"); //@todo add styles for active state in css
		});
	};
	
})
	
