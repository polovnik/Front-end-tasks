$(document).ready(function(){
	setHeight();
	sameHeight();
	redColorItem();
	clearInput()

	function setHeight(){
		$('.container').each(function(index){
			var boxes = $(this).find('.box');
			if(!boxes.length){
				return false;
			};

			var maxHeight = boxes.first().height();
			
			boxes.each(function(){
				var currentHeight = $(this).height()
				if(currentHeight > maxHeight){
					maxHeight = currentHeight;
				};
			});
			boxes.height(maxHeight);
		});
	};
	
//sameHeight for block wich have padding and border
	function sameHeight() {
		var blocks = $('.container .block');
		if(!blocks.length){
			return false;
		};
		var maxHeightBlocks = 0;

		blocks.each(function() {
			if (maxHeightBlocks < $(this).outerHeight()) {
				maxHeightBlocks = $(this).outerHeight();
			};
		});
		blocks.outerHeight(maxHeightBlocks)
	};

//first item in every list should has color red
	function redColorItem() {
		var lists = $('.list');
		var items;
		var allItems;
		var itemIndex;
		var firstItemFirst = lists.find('li:first').css('color', 'red');

		lists.each(function(){
			items = $(this).find('li:odd');
			items.each(function() {
				$(this).prepend($(this).index());
			});

			allItems = $(this).find('li');
			allItems.on('click', function() {
				$(this).toggleClass('active');
				$(this).siblings('li').removeClass("active");
			});
		});
	};

//clear input form
	function clearInput() {
		var form = $('#form');
		var inputs = $('input[type="text"], input[type="password"]');
		var btnClean = $('.btn-clean');

		btnClean.on('click', function(e) {
			e.preventDefault();
			inputs.each(function(){
				$(this).val('');
			});
		});
	};

//resize window
	$(window).resize(function(){
		setHeight();
		sameHeight();
	});

});
	
