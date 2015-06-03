$(function(){
	accordionHide();
	openCloseDIV();
	tabset();
	
	function accordionHide(){
		var accordion = $('.accordion').children();
		var slider = $('.slider');
		accordion.each(function(i, el){
            accordion.removeClass('active');
			accordion.find('.slider').css("display", "none");
			$(el).on('click', function(e){
                var target = $(e.target);
				e.preventDefault();
                accordion.removeClass('active');
				$(this).addClass('active');
				if ( target.is(".accordion > li > a") ) {
					accordion.find('.slider').css("display", "none");
					$(this).find('.slider').css("display", "block");
				//	$(this).find('.slider').toggle();
				}
	        })
        })
	}
	
	function openCloseDIV(){
		var box = $('.box');
		box.each(function(i, el){
			box.removeClass('open');
			box.find('.block').css("display", "none");
			$(el).find('.title').on('click', function(e){
				$(el).addClass('active');
				$(el).find('.block').toggle("normal");
			})
		})
	}
	
	function tabset(){
		var tabsetLI = $('.tabset').children();
		tabsetLI.each(function(i, el){
			var idNum = "#tab" + (i+1);
			$(idNum).hide();
			$(el).removeClass('active');
			$(el).on('click', function(e){
				tabsetLI.removeClass('active');
				$(this).addClass('active');
				e.preventDefault();
				$('.tab-content').hide();
				$(idNum).show();
			})
		})
	}
})