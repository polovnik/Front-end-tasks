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

		$(this).append('<ul>');
		btnPrev = $('<li>');
		btnNext = $('<li>');

		//gallery
		listGallery = $(this).find('ul.gallery');
		slides = $(this).find('li');
		slidesAmount = slides.length;

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
		btnPrev.find('a').addClass('previous').text('PREV');
		btnNext.find('a').addClass('next').text('NEXT');

		control.prepend(btnPrev);
		control.append(btnNext);

		currentPosition = listGallery.css('marginLeft');
		currentPosition = parseInt(currentPosition);

		console.log(currentPosition)

		moveLeft = function() {
			currentPosition = listGallery.css('marginLeft');
			currentPosition = parseInt(currentPosition);
			listGallery.animate({
				marginLeft: (currentPosition + step)
			}, 200);
			flag = true;
		}
		moveRight = function() {
			currentPosition = listGallery.css('marginLeft');
			currentPosition = parseInt(currentPosition);
			listGallery.animate({
				marginLeft: (currentPosition - step)
			}, 200);
			flag = false;
		};

		btnPrev.on('click', function(e) {
			e.preventDefault();

			if (flag === true ) {
				moveLeft();
			} else if (currentPosition > 0) {
				return false;
			};

			flag = false;
		});

		/*btnNext.on('click', function(e) {
			e.preventDefault();
			flag = true;

			if (flag === true ) {
				moveRight();
			} else if (currentPosition === (itemsControl * step)) {
				return false;
			};
			console.log(currentPosition)	
		});*/
		
		//show slide
		linksControl.on('click', function(e) {
			e.preventDefault();

			currentSlide = linksControl.index($(this));
			console.log(currentSlide)
			listGallery.animate({
				marginLeft: - (currentSlide * step)
			});
		});
	});
};