$(document).ready(function(){
	$(".container:first").click(function(){
	});
	$(".btn").click(function(){
		$("ul li:nth-child(even)").css("background-color","red");
	});
	$(".btn-clean").click(function(){
		$("ul li:first-child").hide();
		$("ul li:nth-child(4)").css("background-color","green");
	});
});