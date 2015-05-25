$(function(){

    slider();

    function slider(){

        $('div.gallery-block').each(function(){
            var galleryBlock = $(this);
            var galleryList = galleryBlock.find('ul.gallery');
            var count = galleryBlock.find('div.box').length;


            // create a paging-block
            var content = "<div class='control'>";
            content += "<a class='prev' href='#'>previous</a>";
            content += '<ul>';
            for (var i=0; i < count; i++){
                content += "<li><a href='#'>" + (i+1) + "</a></li>";
            }
            content += '</ul>';
            content +="<a class='next' href='#'>next</a>";
            content += "</div>";
            galleryBlock.append(content);


            // initial state
            var control = galleryBlock.find('.control');
            control.find("ul li:first-child").addClass('active');
            //galleryList.find('.box:not(:first)').hide();


            //event handlers
            control.on('click', 'li a', function(){
                var active = $(this).parent().parent().find('.active');
                active.removeClass('active');
                $(this).parent().addClass('active');
                show(active, $(this));

            }).on('click', 'a.next', function(){
                var active = $(this).parent().find('.active');
                if(!active.is(':last-child')){
                    active.removeClass('active').next().addClass('active');
                    show(active, active.next());
                }
            }).on('click', 'a.prev', function(){
                var active = $(this).parent().find('.active');
                if(!active.is(':first-child')) {
                    active.removeClass('active').prev().addClass('active');
                    show(active, active.prev());
                }
            });


            // slider show
            function show (prev, next){
                var dif = prev.text() - next.text();
                var width =  parseInt(galleryList.find('li').css('width'));
                var marginLeft = parseInt(galleryList.css('margin-left'));
                galleryList.animate({marginLeft: marginLeft + dif * width}, 500);
            }

        });

    };

});