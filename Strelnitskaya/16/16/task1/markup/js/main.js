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
	
	$(window).resize(setHeight);

	function listFirstElement(){ //Первому элементу каждого списка назначить цвет текста красный
		$('ul li:first-child').addClass('red');
	}
	listFirstElement();

	function cleanForm(){ //Очистить поля формы от введенных данных по клику на Clean
		$('button').click(function(){
			$('form').get(0).reset(); //get(0) mehetn первую форму на странице
		}).attr('type', 'button'); //меняет тип кнопки с submit на button 
	}
	cleanForm();

	function evenNumber(){ //Во все четные элементы списка поставить порядковый номер перед текстом
		$('ul').each(function(){ //перербираем каждый ul отдельно
			$(this).find('li').each(function(i){
				if (i%2!==0) { //проверка индекса на нечетность
					$(this).prepend(i+1+' - '); //дописать значение равное индексу+1
				}			
			});
		});		
	}
	evenNumber();

	function activeElement(){ //По клику на элемент списка назначать на него класс "active". Одновременно этот класс может быть только на одном элементе в пределах одного списка
		$('li').click(function(){ //клик на лишку
			$(this).parent().children().removeClass('active'); //находим все лишки в рамках этой ul и убираем класс active если такой был добавлен ранее
			$(this).addClass('active'); // ставим active на ту лишку, на которой был клик
		});
	};
	activeElement();

})
	