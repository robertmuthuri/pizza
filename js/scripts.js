//business logic


//User interface logic
$(function () {
	
	$("input#option1").click(function () {
		$("#size-price").show();
		// $("#size-price").toggle();
		let price = "$" + $("input#option1").val();
		console.log(price);
		
		$("#size-price").text(price);
		// $("#size-price").toggle(price);
		
	});
	$("input#option2").click(function () {
		$("#size-price").show();
		
		let price = "$" + $("input#option2").val();
		
		$("#size-price").text(price);
		
	});
	$("input#option3").click(function () {
		$("#size-price").show();
		
		let price = "$" + $("input#option3").val();
		
		$("#size-price").text(price);
	});
	
});

