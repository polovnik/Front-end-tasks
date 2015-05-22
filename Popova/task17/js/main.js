$(function(){
    viewList(0);
    viewDiv(0);
    viewTab(0);



    function viewList(time){
        var listItem = $('ul.accordion > li');
        listItem.each(function() {
            if ($(this).is('.active')) {
                $(this).find('.slider').slideDown(time);
            } else {
                $(this).find('.slider').slideUp(time);
            }
        });
    }

    $('ul.accordion').on('click', ' > li > a', function (){
        var clickedLi = $(this).parent();
        clickedLi.siblings().removeClass('active');
        clickedLi.toggleClass('active');
        viewList (300);
    });



    function viewDiv(time, target){
        if (target) {
            target.parent().find('.block').fadeToggle();
        } else {
            $('div.box').filter(':not(.open)').find('.block').fadeOut(time);
        }
    }

    $('div.box').on('click', '.title', function(){
        $(this).parent().toggleClass('open');
        viewDiv (600, $(this));
    });



    function viewTab(time){
        var listItem = $('ul.tabset li');
        var activeLi = listItem.is('.active') ? listItem.filter('.active') : listItem.filter(":first-child");
        var tabId = activeLi.find('a').attr('href');
        var content = $('div.tab-content');
        content.filter(tabId).show(time);
        content.not(tabId).hide(time);
    }

    $('ul.tabset').on('click', ' > li > a', function (e){
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');;
        viewTab(400);
    });


});
