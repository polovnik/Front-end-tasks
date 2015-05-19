$(function(){
	gallery();

	function gallery(){
		var galleryBlock = $('.gallery-block');

		galleryBlock.each(function(i, block){
			var galleryList = $(block).find('.gallery');
			var galleryItems = galleryList.children('li');
			var qty = galleryItems.length;
			var pagination = createControl(qty);
			$(block).append(pagination);

			//slide actions
			var itemWidth = galleryItems.width();
			var galleryWidth = itemWidth * qty;
			var galleryLeft = 0;
			var newGalleryLeft;

			var direction;
			var currentSlide = 0;
			var variance = 0;
			var flag = true;
			var prev_next = false;

			//button next
			pagination.find('.next').click(function(e){
				e.preventDefault();
				prev_next = true;
				if (currentSlide >= 0 && currentSlide < qty && flag == true){
					variance = itemWidth;
					direction = -1;
					newGalleryLeft = galleryLeft + variance*direction;
					currentSlide += 1;
					startAnim(direction, newGalleryLeft);
				}
			});
			//button prev
			pagination.find('.prev').click(function(e){
				e.preventDefault();
				prev_next = true;
				if (currentSlide > 0 && currentSlide <= qty && flag == true){
					variance = ItemWidth;
					direction = 1;
					newGalleryLeft = galleryLeft + variance*direction;
					currentSlide -= 1;
					startAnim(direction, newGalleryLeft);
				}
			});
			//buttons with numbers
			var buttons = pagination.find('.slide-number');
			buttons.each(function(j, button){
				$(button).click(function(e){
					debugger;
					e.preventDefault();
					if(flag){
						if((j - currentSlide)>0){
							direction = 1;
						}
						else{
							direction = -1;
						}
						variance = Math.abs((j - currentSlide) * itemWidth);
						newGalleryLeft = galleryLeft - variance * direction;
						currentSlide = j;
						startAnim(direction, newGalleryLeft);
					}
				});
			});

			function startAnim(direction, newGalleryLeft) {
				flag = false;
				if(prev_next){
					if (galleryLeft*direction < newGalleryLeft*direction){
						galleryList.animate({
							marginLeft: Math.round(galleryLeft)
						}, 'slow', function(){
							flag = true;
							prev_next = false;
						});
					}else{
						flag = true;
						prev_next = false;
					}
				}
				else{
					if (galleryLeft*direction > newGalleryLeft*direction){
						galleryList.animate({
							marginLeft: Math.round(galleryLeft)
						}, 'slow', function(){
							flag = true;
						});
					}
					else{
						flag = true;
					}
				}
			}
		})
	}

	function createControl (qty) {
		//create paginatuon for gallery
		var divControl = $('<div>').addClass('control');
		var prev = $('<a>', {
			class: 'prev',
			href: '#',
			text: 'prev'
		});
		var next = $('<a>', {
			class: 'next',
			href: '#',
			text: 'next'
		});
		var controlList = $('<ul>');

		for(var i = 0; i < qty; i++){
			var newLi = $('<li>');
			var newLink = $('<a>', {
				class: 'slide-number',
				href: '#',
				text: i
			});

			newLi.append(newLink);
			controlList.append(newLi);
		}

		divControl.append(prev, controlList, next);

		return divControl;
	}
});



















