$(document).ready(function(){
	setHeight();
    setListStyle();
    formReset();

	function setHeight(){

		$('div.container').each(function(){
			var boxes = $(this).find('div.box, div.block'); // @todo: pay attention that paddings of blocks can be different (use outerHeight)
            var boxesLength = boxes.length;
			if(!boxesLength){
				return false;
			}
            var containerWidth = $('div.container').width();
            var boxWidth = boxes.outerWidth();
            var qtyBoxes = Math.floor(containerWidth/boxWidth);
            var endIndex = qtyBoxes < boxesLength ? qtyBoxes : boxesLength;
            var startIndex = 0;

            while (endIndex <= boxesLength) {
                var maxHeight = boxes.eq(startIndex).height();

                boxes.slice(startIndex,endIndex).each(function(){
                    var currentHeight = $(this).height();
                    maxHeight = currentHeight > maxHeight ? currentHeight : maxHeight;
                });

                boxes.slice(startIndex,endIndex).height(maxHeight);
                startIndex += qtyBoxes;
                endIndex += qtyBoxes;
            }
		})
	}
    function setListStyle(){
        var ul = $('ul.list');

        // Set the text color red to the first element of each list
        ul.find('li').filter(':first-child').css('color', 'red');

        // Put the serial number in even elements of the list
        ul.each(function(){
           $(this).find('li:odd').text(function(i){
               return (i+1)*2 + ' ' + $(this).text();
           });
        });

        // Set class "active" on the click element of the list
        ul.find('li').click(function(){
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
    }

    function formReset(){
        $('button.btn-clean').click(function(e){
            e.preventDefault();
            $(this).parent().find('input:not([type=submit])').val('');
        });
    }

});

