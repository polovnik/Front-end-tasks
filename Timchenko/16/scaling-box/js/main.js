$(function(){
	scaleBox();
});

function scaleBox(){
	var holder = $('#wrapper');
	var holderPadding = (holder.outerWidth() - holder.width())/2;
	console.log(holderPadding)
	var block = $('.box');
	var blockCurrentWidth;
	var blockCurrentHeight;
	var blockNewWidth;
	var blockNewHeight;
	var button = document.getElementsByClassName('btn')[0];
	var btn = $('.btn')
	console.log(btn)
	var btnPositionTop;
	var btnPositionLeft;
	var pos;
	var elem_left;
	var elem_top;
	var Xinner;
	var Yinner;

	button.addEventListener("mousedown", searchValues);

	button.removeEventListener("mouseup", searchValues);

	function searchValues() {
		blockCurrentWidth = block.width();
		blockCurrentHeight = block.height();
		console.log('Block size: ' + blockCurrentWidth + ' x ' + blockCurrentHeight);
		btnPositionTop = btn.offset().top;
		btnPositionLeft = btn.offset().left;
		console.log(btnPositionTop + " " + btnPositionLeft);

		positionElement();
	};

	function positionElement() {
		holder.mousemove(function(e){
			// положение элемента
			pos = $(this).offset();
			elem_left = pos.left;
			elem_top = pos.top;
			// положение курсора внутри элемента
			Xinner = e.pageX - elem_left;
			Yinner = e.pageY - elem_top;
			console.log("X: " + Xinner + " Y: " + Yinner); // вывод результата в консоль

			blockNewWidth = blockCurrentWidth + (Xinner - blockCurrentWidth) - holderPadding + 5;
			blockNewHeight = blockCurrentHeight + (Yinner - blockCurrentHeight) - holderPadding + 5;

			block.width(blockNewWidth);
			block.height(blockNewHeight);
		});
	}
};












