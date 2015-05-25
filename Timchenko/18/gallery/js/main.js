$(document).ready(function() {
	gallerySlide('.gallery-block');
});

function gallerySlide(galleryblock) {
	var blockGallery = $(galleryblock);
	var holderGallery = blockGallery.children('.gallery-holder');
	var holderGalleryWidth = holderGallery.width();
	var slidesWidth =holderGalleryWidth;
	var step = slidesWidth;
	var control;
	var itemsControl;
	var linksControl;
	var listGallery;
	var slides;
	var slidesAmount;
	

	blockGallery.each(function() {
		var i = 0;

		$(this).append('<ul>');

		//gallery
		listGallery = $(this).find('ul.gallery');
		slides = $(this).find('li');
		slidesAmount = slides.length;

		//pagination
		control = $(this).find('> ul').addClass('control');
		//add li
		while (i < slidesAmount) {
			console.log(i)
			control.append('<li>');
			i++;
		};
		//add a
		itemsControl = control.children('li');
		itemsControl.each(function(index){
			$(this).append('<a>');
			$(this).find('a').attr('href', '#').html(index + 1)
		});

		linksControl = control.find('a')
		
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