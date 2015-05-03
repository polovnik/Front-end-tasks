$(document).ready(function(){
	setHeight();
    setListStyle();
    formReset();

	function setHeight(){

		$('.container').each(function(){
			var boxes = $(this).find('.box, .block');
            var boxesLength = boxes.length;
			if(!boxesLength){
				return false;
			}
            var containerWidth = $('.container').width();
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

        $('ul li:first-child').css('color', 'red');

        $('ul').each(function(){
           $(this).find('li:odd').prepend(function(i){
               return (i+1)*2 + ' ';
           });
        });

        $('ul li').click(function(){
            $(this).parent().find('li').removeClass('active');
            $(this).addClass('active');
        });
    }

    function formReset(){
        $('.btn-clean').click(function(e){
            e.preventDefault();
            $(this).parent().find('input:not([type=submit])').val('');
        });
    }

});

