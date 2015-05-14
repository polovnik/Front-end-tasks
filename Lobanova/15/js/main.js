
$(function(){
    console.log ($(".container:first .box"));
    $('.btn').click(function(){
       $('ul li:odd').css('background-color', 'red');
    });
    $('.btn-clean').click(function(){
        $('ul li:first-child').hide();
        $('ul li:nth-child(3n+4)').css('background-color', 'green');

    });

});