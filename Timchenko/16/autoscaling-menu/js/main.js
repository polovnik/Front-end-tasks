$(function(){
	autoMenu();
});

function autoMenu(){
	var navList = $('#nav');
	var listItems = navList.find('li');
	var listItemsHeight = listItems.height();
	var holderWidth = navList.width();
	var listItemsWidthInteger = Math.floor(holderWidth / listItems.length);
	var listItemsModulo = (holderWidth % listItems.length) / 2;
	var itemsLiPddings = listItems.outerWidth() - listItems.width();
	var fullSpace;
	var maxHeight = 0;


	listItems.each(function(){
		listItems.width(listItemsWidthInteger - itemsLiPddings);
		
		if ($(this).height() > maxHeight) {
			maxHeight = $(this).height();
		}
	});

	listItems.height(maxHeight)
		
	fullSpace = listItemsWidthInteger - itemsLiPddings + listItemsModulo;
	listItems.last().width(fullSpace);
	listItems.first().width(fullSpace);

}

$(window).resize(function(){
	autoMenu();
});








