$(document).ready(function(){

	$(function () {
		$('ul.accordion li a').click(function(){
			$(this).toggleClass('active');
			$(this).next('div.slider').toggle(600);
		});
	});

	$(function () {
		$('div.box div.title').click(function(e){
			e.preventDefault();
			$(this).toggleClass('active');
			$(this).next('div.block').toggle(1000);
		});
	});

	$(function () {
		var tabContent = $('div.tab-content');
		tabContent.not(':first').hide();
		$('ul.tabset li a').click(function () {
			$(this).toggleClass('active');
			tabContent.hide();
			tabContent.filter(this.hash).show();
		})
	});

});