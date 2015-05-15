$(function(){
    scaleBox();
});

function scaleBox(){
    var windowHeight = $(document).height(); //use window instead document here:it will prevent scaling box under firebug panel
    var wrap = $('#wrapper');
    var maxWidth = wrap.width();
    var maxHeight = windowHeight - (wrap.outerHeight() - wrap.height());
    var btn = $('span.btn');
    var minWidth = btn.width();
    var minHeight = btn.height();

    btn.on('mousedown', function(e) {
        var startX = e.pageX;
        var startY = e.pageY;
        var parent = btn.parent();

        $(document).on('mousemove', function(e){
            var parentWidth = parent.width();
            var parenHeight = parent.height();
            var newX =  e.pageX;
            var newY =  e.pageY;
            var newWidth = parentWidth + newX - startX;
            var newHeight = parenHeight + newY - startY;

            if(newWidth <= maxWidth && newWidth >= minWidth){
                parent.css('width', newWidth + 'px');
                startX = newX;
            }
            if(newHeight <= maxHeight && newHeight >= minHeight){
                parent.css('height', newHeight + 'px');
                startY = newY;
            }

        }).on('mouseup', function(e){
            $(document).off();
        });

    }) ;

}









