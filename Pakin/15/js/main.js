/**
 * Created by pakin on 26.04.15.
 */
console.log($('.container:first').children());
console.log($('.container:first').find('.box'));
console.log($('.container:first > .box'));

$('.btn').click(function(){
    $('li:odd').css('background', 'red');
})

$('.btn-clean').click(function(){
    $('li:first-child').hide(500);
    $('li:nth-child(3)').css('background', 'green');

});

