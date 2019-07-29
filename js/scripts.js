$(function () {

	//make card clickable
	// $(".margharita").click(function () {
	// 	window.location = $(this).find("a").attr("href");
	// 	return false;
	// });
	$(() => {
		'use strict';
		$("form-check-input").click(function() {
			$(this).toggleClass('pressed');
		});
	});
});

