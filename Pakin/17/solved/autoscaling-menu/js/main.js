$(function(){
	autoMenu();
});

function autoMenu(){
	var holderWidth = $('#nav').width();
	var item = $('#nav > li > a');
	var count = item.length;
	var liOuterWidth = item.parent().outerWidth(true);
	var liWidth = item.parent().width();
	var itemsSpace = (liOuterWidth - liWidth) * count;
	
	var itemWidth = Math.floor((holderWidth - itemsSpace)/count);
	var itemAdd = (holderWidth - itemsSpace)%count;
	item.width(itemWidth);
	item.last().width(itemWidth + itemAdd);
}













