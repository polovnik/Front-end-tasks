$(document).ready(function () {
	fistElement();
	liRed();
	cleanList();

	//Выбрать эл-ты с классом box только из первого container
	function fistElement () {
		//1 variant
		//var containers = $('#wrapper > .container').eq(0);

		//2 variant
		//var containers = $('#wrapper > .container:eq(0)');
		
		//3 variant
		var containers = $('#wrapper > .container:first');
		
		var boxes = containers.find('.box');
		boxes.css('color', 'red');
	}

	//По клику на Button назначить красный фон каждоу второму элементу списка 
	function liRed () {
		var ListItemsOdd = $('.list li:odd');
		var btn = $('a.btn');

		btn.on('click', function (e) {
			e.preventDefault();
			ListItemsOdd.css('color', 'red');
		})
	}

	//По клику на Clean выбрать первый эл-т списка в каждом списке и скрыть. Каждый третий из оставшихся залить зеленым фоном.
	function cleanList () {
		var lists = $('.list')
		var items = lists.find('li');
		console.log(items)
		var btn = $('a.btn-clean');

		btn.on('click', function (e) {
			e.preventDefault();
			lists.find('li:first-child').hide();
			lists.find('li:eq(3)').css('background', 'green');
		})
	}
});