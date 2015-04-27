$(document).ready(function(){

var firstContainer = $(".box:lt(3)");
console.log(firstContainer);

var oddLi = $("li:odd");
var firstLi = $("ul li:first-child");
var evenLi = $("ul li:nth-child(3n+4)");

$(".btn").click(function(){
	oddLi.css("background-color", "red");
	});
$(".btn-clean").click(function(){
	firstLi.hide();
	evenLi.css("background-color","green");
	});	
});