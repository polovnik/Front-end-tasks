$(function(){
	autoMenu();
});

function autoMenu(){
    var listItems = $('#nav li');
    var parentWidth = $(listItems).parent().width();
    var qtyEl = listItems.length;
    var widthEl =  Math.floor (parentWidth / qtyEl);
    var difference = parentWidth - widthEl * qtyEl;
    var indent =   Math.round ($(listItems).outerWidth(true)- $(listItems).width());
    $(listItems).find('a').width(widthEl-indent).last().width(function(i,val){
        return val + difference;
    });

}













