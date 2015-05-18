$(function(){
    setHeight('.box');
    setHeight2('.block');
    handleList('.list');
    cleanForm('#form');
});

function setHeight(elClass) {
    var boxes = $(elClass);
    var maxHeight = 0;
    boxes.each(function (i, el) {
        var boxHeight = $(el).height();
        if (boxHeight > maxHeight) {
            maxHeight = boxHeight;
        }
    });
    boxes.height(maxHeight);
}


function setHeight2(elClass){
    var boxes = $(elClass);
    var maxHeight = getMaxHeight(boxes);
    boxes.each(function(i, el){
        var boxIndents = $(el).outerHeight() - $(el).height();
        $(el).height(maxHeight - boxIndents);
    })
}

function getMaxHeight (boxes){
    var maxHeight = 0;
    boxes.each(function (i, el) {
        var boxHeight = $(el).outerHeight();
        if (boxHeight > maxHeight) {
            maxHeight = boxHeight;
        }
    });
    return maxHeight;
}

function handleList (list){
    var lists = $(list);
    lists.each(function (i, list) {
        var items = $(list).find('li');

        items.first().css({'color':'#f00'});

        items.each(function(i, el){
            if(!((i+1)%2)){
                $(el).prepend((i + 1) + ' ')
            }
        })

        items.each(function(i, el){
            $(el).on('click', function(e){
                e.preventDefault();
                items.removeClass('active')
                $(this).addClass('active')
            })
        })
    });
}

function cleanForm (formId){
    var form = $(formId);
    var inputs = form.find('input').not('[type="submit"]');
    var btnClean = form.find('.btn-clean');

    btnClean.on('click', function(e){
        e.preventDefault();
        inputs.val('');
    })
}