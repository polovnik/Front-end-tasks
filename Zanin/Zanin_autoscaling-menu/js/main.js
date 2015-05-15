$(function(){
	autoMenu();
});

function autoMenu(){
	var width = $('#wrapper').width();
	console.log('wrapper width:', width);
	$('#nav li:last').each(function(){
			var li = $('#nav li').length;
			console.log('li:',li);

			var liWidth = (width-(li*2)) / li;
			console.log('width of li:',liWidth);
			$('#nav li a').css('width', liWidth);
		})
}













