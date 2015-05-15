$(function(){
	autoMenu();
});

function autoMenu(){
	var outerWidth = $('#wrapper').outerWidth();//why do you need outerWidth of wrapper?
	console.log('outerWidth is:', outerWidth);
	var width = $('#wrapper').width();
	console.log('width is:', width);
	var padding = outerWidth - width;
	console.log('padding is:', padding);
	$('#nav li:last').each(function(){
			var li = $(this).index()+1; //maybe clearer to use $('#nav li').length to get quantity of items?? and rename variable please: it's amount not li itself
			console.log('li amount:',li);

			var liWidth = (outerWidth-(padding+(li*2))) / li; // width/li  - not the same? ))
			console.log('width of li:',liWidth);
			$('#nav li a').css('width', liWidth);
		})
}













