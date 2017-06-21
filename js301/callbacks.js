// Callbacks > passing a function in a function 
// In JS, functions are just objects
//Therefore...you can pass functions around your code

// =====this======
// $('btn').click(functio(){console.log("Click!")})
// ======is the same as===========
// var clickFunction = function(){console.log("Click!")};
// $('btn').click(clickFunction); //ex of callback

// =======somewhere in jQuery, is this..==========
// var $ = {};
// $.click = function(callbackToRunLater){
// 	//stuff happens
// 	callbackToRunLater();
// }

// Consider the following...
// x(2)(3)

// function x(y){
// 	return function(z){
// 		console.log(y+z)
// 	}
// 	console.log(y)
// }

function x(3){
	var funcToReturn = function(z){
		conosle.log(y+z)
	}
	return funcToReturn

}

function x(2){
	return function(z){
		console.log(2+z);
	}

}


// x(2)(3)
//How can you make this work?
// the only way is if x RETURNS a function
//That function will take a parameter
//higher Order function = a function that gets passed around
//x(2) needs to return a function


// ==========
function print(thingToPrint){
	console.log(thingToPrint)
}

// the print function doesn't need to be pass around because we have access to it locally
// think blackjack, deal was a utility function, we called it when needed 

function b(number){
	let localNum = number * number;
	//Call the print function above
	print(localNum)
}

function c(theString){
	let localStirng = theString + " is what was passed"
}

b(2);
c("The Test")


// could also make print a prototype of a constructor
// but what if we didn't have access to the code that needed to run our code? 
// i.e. what if we didn't have access to the print function?
//make it a callback

var a = function(theVar){
	console.log(theVar)
}

var b = function(number, callback){
	let localNumb = number * number;
	callback(localNum);
}

b(3,function(number){console.log(number)});
//passing argument 2 which is a function 

b(3, a)


==========somewhere in jquery=======
