//business logic
let blanks = ["cheese","mozzarella","mushroom","egg","bacon","turkey"];
let sizePrice,totalToppings = 0;
// function AddToppings();

//Create pizza toppings object
function ToppingsPrices(cheese,mozzarella,mushroom,egg,bacon,turkey) {
	this.cheese = cheese;
	this.mozzarella = mozzarella;
	this.mushroom = mushroom;
	this.egg = egg;
	this.bacon = bacon;
	this.turkey = turkey;
}

//instantiate the pricing object
let margharitaToppingsPrices = new ToppingsPrices(2,2,2,2,2, 2);

//Create pizza size prices
function PizzaSizePrice(small,large,family) {
	this.small = small;
	this.large = large;
	this.family = family;
}
//Create an instance of the size price
let myPizzaSizePrice = new PizzaSizePrice(9,11,13);

//User interface logic
$(function () {
	
	$("input#option1").click(function () {
		// $("#size-price").show();
		// $("#size-price").toggle();
		// let price = "$" + $("input#option1").val();
		let sizePrice = "$" + myPizzaSizePrice.small;
		console.log(sizePrice);
		
		$("#size-price").show().text(sizePrice);
		// $("#size-price").toggle(price);
		
	});
	$("input#option2").click(function () {
		// $("#size-price").show();
		
		let sizePrice = "$" + myPizzaSizePrice.large;
		console.log(sizePrice);
		$("#size-price").show().text(sizePrice);
		
	});
	$("input#option3").click(function () {
		// $("#size-price").show();
		
		let sizePrice = "$" + myPizzaSizePrice.family;
		console.log(sizePrice);
		$("#size-price").show().text(sizePrice);
	});
	// blanks.forEach(function (blank) {
	// 	let arr = parseInt($("#" + blank).val);
	// 	console.log(arr);
	// 	const totalToppings = arr => arr.reduce((a, b) => a + b, 0);
	// 	$("#toppings-price").show().text("$" + totalToppings);
	// 	// console.log(totalToppings);
	// });
	// $("input#cheese").checkbox(function () {
	
	var checkCheese = $('input[id="cheese"]');
	let numCheese = parseInt(margharitaToppingsPrices.cheese);
	checkCheese.change(function () {
		if (this.checked === true) {
			totalToppings += numCheese;
			console.log(numCheese);
			$("#toppings-price").show().text("$" + totalToppings);
		} else {
			totalToppings -= numCheese;
			console.log(numCheese);
			$("#toppings-price").show().text("$" + totalToppings);
		}
	});
	
	var checkMozzarella = $('input[id="mozzarella"]');
	let numMozzarella = parseInt(margharitaToppingsPrices.mozzarella);
	checkMozzarella.change(function () {
		if (this.checked === true) {
			totalToppings += numMozzarella;
			console.log(numMozzarella);
			$("#toppings-price").show().text("$" + totalToppings);
		} else {
			totalToppings -= numMozzarella;
			console.log(numMozzarella);
			$("#toppings-price").show().text("$" + totalToppings);
		}
	});
	var checkMushroom = $('input[id="mushroom"]');
	let numMushroom = parseInt(margharitaToppingsPrices.mushroom);
	checkMushroom.change(function () {
		if (this.checked === true) {
			totalToppings += numMushroom;
			console.log(numMushroom);
			$("#toppings-price").show().text("$" + totalToppings);
		} else {
			totalToppings -= numMushroom;
			console.log(numMushroom);
			$("#toppings-price").show().text("$" + totalToppings);
		}
	});
	var checkEgg = $('input[id="egg"]');
	let numEgg = parseInt(margharitaToppingsPrices.egg);
	checkEgg.change(function () {
		if (this.checked === true) {
			totalToppings += numEgg;
			console.log(numEgg);
			$("#toppings-price").show().text("$" + totalToppings);
		} else {
			totalToppings -= numEgg;
			console.log(numEgg);
			$("#toppings-price").show().text("$" + totalToppings);
		}
	});
	var checkBacon = $('input[id="bacon"]');
	let numBacon = parseInt(margharitaToppingsPrices.bacon);
	checkBacon.change(function () {
		if (this.checked === true) {
			totalToppings += numBacon;
			console.log(numBacon);
			$("#toppings-price").show().text("$" + totalToppings);
		} else {
			totalToppings -= numBacon;
			console.log(numBacon);
			$("#toppings-price").show().text("$" + totalToppings);
		}
	});
	var checkTurkey = $('input[id="turkey"]');
	let numTurkey = parseInt(margharitaToppingsPrices.turkey);
	checkTurkey.change(function () {
		if (this.checked === true) {
			totalToppings += numTurkey;
			console.log(numTurkey);
			$("#toppings-price").show().text("$" + totalToppings);
		} else {
			totalToppings -= numTurkey;
			console.log(numTurkey);
			$("#toppings-price").show().text("$" + totalToppings);
		}
	});
	
	//Display final pizza price
	
	
		// if ($("input#cheese").change(function () {
		//
		// })) {
		// // let check = $("input#cheese").prop("checked");
		// console.log(margharitaToppingsPrices.cheese);
		// 	// let numCheese = parseInt($("#cheese").val());
		// 	let numCheese = parseInt(margharitaToppingsPrices.cheese);
		// 	console.log(numCheese);
		// 	totalToppings += numCheese;
		// 	console.log(totalToppings);
		// // }
		// 	$("#toppings-price").show().text("$" + totalToppings);
		//
		
		// $("#toppings-price").show().text("$" + totalToppings);
	// });
	
	// $("input#mozzarella").click(function () {
	// 	let numMozzarella = parseInt($("#mozzarella").val());
	// 	totalToppings += numMozzarella;
	// 	$("#toppings-price").show().text("$" + totalToppings);
	// 	// $("#toppings-price").show().text("$" + totalToppings);
	// });
	// $("input#mushroom").click(function () {
	// 	let numMushroom = parseInt($("#mushroom").val());
	// 	totalToppings += numMushroom;
	// 	// $("#toppings-price").show().text("$" + totalToppings);
	// });
	// $("input#egg").click(function () {
	// 	let numEgg = parseInt($("#egg").val());
	// 	totalToppings += numEgg;
	// 	// $("#toppings-price").show().text("$" + totalToppings);
	// });
	// $("input#bacon").click(function () {
	// 	let numBacon = parseInt($("#bacon").val());
	// 	totalToppings += numBacon;
	// 	// $("#toppings-price").show().text("$" + totalToppings);
	// });
	// $("input#turkey").click(function () {
	// 	let numTurkey = parseInt($("#turkey").val());
	// 	totalToppings += numTurkey;
	//
	// 	// $("#toppings-price").show().text("$" + totalToppings);
	// });
	// totalToppings = arr => arr.reduce((a, b) => a + b, 0);
	// $("#toppings-price").text("$" + totalToppings);
	// console.log(totalToppings);
	
});

