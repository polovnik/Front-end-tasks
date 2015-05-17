$(function(){
	autoMenu();
});

function autoMenu(){
	var navList = $('#nav');
	var listItems = navList.find('li');
	var listItemsHeight = listItems.height();
	var linksItemsHeight = listItems.find('a');
	var holderWidth = navList.width();
	var listItemsWidthInteger = Math.floor(holderWidth / listItems.length);
	var listItemsModulo = (holderWidth % listItems.length) / 2;
	var itemsLiPddings = listItems.outerWidth() - listItems.width();
	var fullSpace;
	var maxHeightLink = 0;

	listItems.each(function(){
		listItems.width(listItemsWidthInteger - itemsLiPddings);
	});

	linksItemsHeight.each(function(){
		if ($(this).outerHeight() > maxHeightLink) {
			maxHeightLink = $(this).outerHeight();
		}
	});

	listItems.outerHeight(maxHeightLink)
	fullSpace = listItemsWidthInteger - itemsLiPddings + listItemsModulo;
	listItems.last().width(fullSpace);
	listItems.first().width(fullSpace);

}

$(window).resize(function(){
	autoMenu();
});








