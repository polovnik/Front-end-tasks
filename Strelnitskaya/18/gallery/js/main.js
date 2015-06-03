$(function(){
	slider();


	function slider(){
		var slidesCount = $("div.box").length; 		

			function createControl(){ 
				var control = $(".gallery-holder").after("<div class='control'>");
				var controlList = $(".control").append("<ul>");
				for (i = 1; i <= slidesCount; i++) {
					var controlItem = $(".control ul").append("<li><a number='" + i + "'>" + i);
					var a = $("a").attr("href", "#");
				}
			}
			createControl();

			$("a").click(function(){
				var controlItem = $(this).attr("number");
				for (j = 1; j <= slidesCount; j++){
					var slideMove = ((controlItem-1) * -600) + "px";
					console.log (slideMove)
				}
				$(".gallery").animate({"margin-left": slideMove});				
			})
	}
})
