$(function(){
	scaleBox();
});

function scaleBox(){
	var resizeBlock = $('.box');
	var btn = $('.btn');


	btn.mousedown(function(){
		resizeBlock.resizable();
	});

};












