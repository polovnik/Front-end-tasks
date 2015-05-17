$(document).ready(function(){
	setHeight();
	setHeightBlock();
	colorLiFirst();
	clearInput();
	serialNumber();
	clickList();
//1)Высота блоков в одной строке должна быть одинаковой
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
			boxes.height(maxHeight);
		})
	}
//1.1 
	function setHeightBlock(){
		$('.container').each(function(){
			var blockes = $(this).find('.block'); //@todo: pay attention that paddings of blocks can be different (use outerHeight)
			var maxHeight = blockes.first().outerHeight(); // +
			blockes.each(function(){
				var currentHeight = $(this).height()
				if(currentHeight > maxHeight){
					maxHeight = currentHeight;
				}
			})
			blockes.height(maxHeight);
		})
	}
	
//2)Первому элементу каждого списка назначить цвет текста красный
	function colorLiFirst() {
		$('.list li:first-child').css("color", "#ff0000"); // +
		
		/*
		$('.list').each(function(){  //@todo: use first-child instead loop each
			var childs = $(this).children('li:first');
			childs.css("color", "#ff0000");
		})
		*/
		
		/* тоже рабочий вариант
		$('.list').each(function(){
			var childs = $(this).children();
			var childFirst = childs.eq(0);
			childFirst.css("color", "#ff0000");
		})
		*/
	}

//3)Очистить поля формы от введенных данных по клику на Clean
	function clearInput() {
		$('.btn-clean').click(function(){
			$('#form input[type="text"]').val("");
			$('#form input[type="password"]').val("");
		})
	}

//4)Во все четные элементы списка поставить порядковый номер перед текстом	
	function serialNumber() {
		$('.list').each(function(){
			var	childs = $(this).find("li");
			childs.each(function(i){
				var	textLI = $(this).text();
				if ( ((i+1)%2) == 0 ) { //@todo: use "even"
					$(this).text( i+1 + " " + textLI );
				}
			})
		})	
	}
	
//5)По клику на элемент списка назначать на него класс "active". Одновременно этот класс может быть только на одном элементе в пределах одного списка	
	function clickList() {
		$('.list').each(function(){
			var childs = $(this).children();
			$(childs).click(function(){
				childs.removeClass("active"); // +
				/*
				childs.each(function(){ //@todo: doesn't need loop, apply method removeClass directly to variable childs
					$(this).removeClass("active");
				})
				*/				
				$(this).addClass("active");
			})
		})
	}
	
})
	
