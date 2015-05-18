$(document).ready(function() {
	accordion();
	openClose();
	tabs();


	function accordion() {
		var holder = $('.accordion');
		var items = holder.find('li');
		var opener = $('.accordion > li > a');
		var slides = items.find('.slider').hide();

		opener.on('click', function(e) {
			e.preventDefault();
			items.removeClass('active');
			$(this).parent('li').addClass('active');
			slides.slideUp();
			if ($(this).parent('li').hasClass('active')) {
				$(this).siblings('.slider').slideDown();
			};
		});
	};

	function openClose() {
		var holder = $('.main');
		var boxes = holder.find('.box');
		var opener = holder.find('.title a');
		var slides = holder.find('.block');

		boxes.each(function() {
			if($(this).hasClass('open')) {
				$(this).children('.block').show();
			} else {
				$(this).children('.block').hide();
			};
		});

		opener.on('click', function(e) {
			e.preventDefault();
			var currentBox = $(this).parents('.box');
			console.log($(this).siblings('.block'))
			if(currentBox.hasClass('open')) {
				currentBox.removeClass('open');
				$(this).parent('.title').siblings('.block').slideUp();
			} else {
				currentBox.addClass('open');
				$(this).parent('.title').siblings('.block').slideDown();
			};
		});
	};


	function tabs() {
		var holder = $('.main');
		var tabset = holder.find('.tabset');
		var tabItems = tabset.find('li');
		var tabLinks = tabItems.find('a');
		var tabs = holder.find('.tab-content').hide();
		var hrefVal;

		tabItems.each(function() {
			if($(this).hasClass('active')) {
				hrefVal = $(this).children('a').attr('href');
				$(this).parents('.tabset').siblings(hrefVal).show();
			};
		});

		tabLinks.on('click', function(e) {
			e.preventDefault();
			if($(this).parent('li').hasClass('active')) {
				return console.log('this item has class active');
			} else {
				tabItems.removeClass('active');
				tabs.hide();
				$(this).parent('li').addClass('active');
				hrefVal = $(this).attr('href');
				console.log(hrefVal)
				$(this).parents('.tabset').siblings(hrefVal).show();
			}
		});
	};
});