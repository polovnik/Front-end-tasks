$(document).ready(function() {
	gallerySlide('.gallery-block');
});

function gallerySlide(galleryblock) {
	var blockGallery = $(galleryblock);
	var holderGallery = blockGallery.children('.gallery-holder');
	var holderGalleryWidth = holderGallery.width();
	var slidesWidth = holderGalleryWidth;
	var step = slidesWidth;
	
	blockGallery.each(function() {
		var i = 0;
		var control;
		var itemsControl;
		var linksControl;
		var listGallery;
		var slides;
		var slidesAmount;
		var btnPrev;
		var btnNext;
		var currentSlide;
		var currentPosition;
		var moveLeft;
		var moveRight;
		var flag = true;
		var animateSpeed = 400;

		$(this).append('<ul>');
		btnPrev = $('<li>');
		btnNext = $('<li>');

		//gallery
		listGallery = $(this).find('ul.gallery');
		slides = $(this).find('li');
		slidesAmount = slides.length;
		slides.css('z-index', 0);
		currentPosition = slides.eq(0).addClass('active').css('z-index', 1);

		//pagination
		control = $(this).find('> ul').addClass('control');
		//add li
		while (i < slidesAmount) {
			control.append('<li>');
			i++;
		};
		//add a
		itemsControl = control.children('li');
		itemsControl.each(function(index){
			$(this).append('<a>');
			$(this).find('a').attr('href', '#').html(index + 1)
		});
		linksControl = control.find('a');
		
		//prev next
		btnPrev.append('<a>');
		btnNext.append('<a>');
		btnPrev.find('a').addClass('prev').text('PREV');
		btnNext.find('a').addClass('next').text('NEXT');
		control.prepend(btnPrev);
		control.append(btnNext);

		//event previous slide
		btnPrev.on('click', function(e) {
			e.preventDefault();
			if (flag === true) {
				moveLeft();
			};
		});

		//event next slide
		btnNext.on('click', function(e) {
			e.preventDefault();
			if (flag === true) {
				moveRight();
			};
		});

		moveLeft = function() {
			flag = false;
			var i = listGallery.find('li.active');
			currentPosition = slides.index(i)

			if (currentPosition <= 0) {
				i.animate({
					zIndex:1,
					opacity:1
				}, animateSpeed, function() {
					flag = true;
				});
			} else {
				slides.css({
					zIndex:0,
					opacity:0
				}).removeClass('active');
				i.prev().animate({
					zIndex:1,
					opacity:1
				}, animateSpeed, function() {
					flag = true;
				}).addClass('active');
			};
		}
		moveRight = function() {
			flag = false;
			var i = listGallery.find('li.active');
			currentPosition = slides.index(i)
			
			if (currentPosition >= (slidesAmount - 1)) {
				i.animate({
					zIndex:1,
					opacity:1
				}, animateSpeed, function() {
					flag = true;
				});
			} else {
				slides.css({
					zIndex:0,
					opacity:0
				}).removeClass('active');
				i.next().animate({
					zIndex:1,
					opacity:1
				}, animateSpeed, function() {
					flag = true;
				}).addClass('active');
			};
		};

		//show slide
		linksControl.on('click', function(e) {
			e.preventDefault();
			currentSlide = linksControl.index($(this));
			currentPosition = slides.eq(currentSlide);

			slides.css({
				zIndex:0,
				opacity:0
			}).removeClass('active');
			currentPosition.animate({
				zIndex:1,
				opacity:1
			}).addClass('active');
		});
	});
};