$(function () {

	//make card clickable
	// $(".margharita").click(function () {
	// 	window.location = $(this).find("a").attr("href");
	// 	return false;
	// });
	$("input#option1").click(function () {
		$("#small-size").toggle();
		
	});
	$("input#option2").click(function () {
		$("#large-size").toggle();
	});
	$("input#option3").click(function () {
		$("#family-size").toggle();
		
	});
	
});

