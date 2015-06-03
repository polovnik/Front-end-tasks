$(function(){
	toggleParagraph();
	accordionSlider();
	tabsetController();
})

function toggleParagraph(){ // дописать дефолтное скрытие параграфов
	$(".block > p").hide();
	$("div.title > a").on("click", function(){
	var box = $(this).parents().eq(1);
	var paragraph = $(this).parent(".title").siblings(".block").find("p");
	var display = paragraph.css("display");
	paragraph.toggle(1000);
		if (display == "none") {
			box.removeClass();
			box.addClass("box open");
		}
		else {
			box.removeClass();
			box.addClass("box");
		}
	});	
}
function accordionSlider(){
	/*$(".accordion").children().find(".slider").css("display", "none");
	$(".accordion").children(".active").find(".slider").css("display", "block");
	$(".accordion > li > a").on("click", function(){
		$("ul.accordion").children(".active").removeClass();
		$(this).parent().addClass("active");
		
		var selfClick = $(this).siblings().is(":visible");
			if (selfClick) {
				return;
			}
		$(this).siblings().is(":visible").slideToggle;
		$(this).siblings().slideToggle;
		$(".accordion > li > .slider").slideUp();
		$(this).siblings().slideToggle();*/
	
	var liItems = $(".accordion > li");
	var sliders = $(".accordion .slider");
	liItems.each(function(){
		var link = $(this).children("a");
		var slider = link.siblings(".slider");
		if(!$(this).hasClass("active")){
			slider.hide();
		}
		link.on("click", function(){
			if($(this).parent().hasClass("active")) { //selfclick
				$(this).parent().removeClass("active"); 
				$(this).siblings().slideUp(1000); // selfclick-end
			}
			else {
				liItems.removeClass("active");
				sliders.slideUp(1000);
				$(this).parent().addClass("active");
				$(this).siblings(".slider").slideDown(1000);
			}
		})	
	});
}
function tabsetController(){
	
	
	
	
}