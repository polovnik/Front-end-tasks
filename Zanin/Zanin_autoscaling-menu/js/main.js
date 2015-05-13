$(function(){
	autoMenu();
});

function autoMenu(){
	var outerWidth = $('#wrapper').outerWidth();
	console.log('outerWidth is:', outerWidth);
	var width = $('#wrapper').width();
	console.log('width is:', width);
	var padding = outerWidth - width;
	console.log('padding is:', padding);
	$('#nav li:last').each(function(){
			var li = $(this).index()+1;
			console.log('li amount:',li);

			var liWidth = (outerWidth-(padding+(li*2))) / li;
			console.log('width of li:',liWidth);
			$('#nav li a').css('width', liWidth);
		})
}













