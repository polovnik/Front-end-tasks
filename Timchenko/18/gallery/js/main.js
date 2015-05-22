$(document).ready(function() {
	gallerySlide();
})


function gallerySlide() {
	var holder = $('#container');
	var blockGallery = holder.find('.gallery-block');
	var holderGallery = holder.find('.gallery-holder');
	var control;
	var itemsControl;
	var listGallery;
	var slides;
	var currentGallery;
	var slidesAmount;
	var i = 0;


	


	blockGallery.each(function(index) {
		currentGallery = $(this).addClass('gallery' + index);

		currentGallery.append('<ul>');

		listGallery = currentGallery.find('ul.gallery');
		control = currentGallery.find('ul:not(.gallery)').addClass('control')
		slides = listGallery.find('li');
		slidesAmount = slides.length;


		while (i < slidesAmount) {
			control.append('<li>');
			i++;
		};

		itemsControl = control.find('li');

		console.log(itemsControl)

		itemsControl.each(function(index){
			$(this).append('<a>');
			$(this).find('a').attr('href', '#').html(index)
		});
	});

};