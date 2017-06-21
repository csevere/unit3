// findElement([1,3,5,8,9,10], function(num){return num % 2 === 0})
// Return 8
// findElement([1,3,5,9], function(num){reutrn num % 2 === 0})
// Return false
// findElement['Jim','Indian','Marsh','Glitch'], function(str){reutrn str.indexOf('itch) !== -1})



function findElement (arr,func){
	for(let item of arr){
		if(func(item)){
			return item
		}
	}
	return false; 
}


x = findfindElement([1,3,5,8,9,10], function(num){return num % 2 === 0})
console.log(x)










// var findElement = function(numbers){
//   	for(var i = 0; i <numbers.length; i++){
// 		  if((numbers[i]%2)== 0){
// 			return numbers[i];
// 		}
// 	}  
// }

// var geteight = findElement(numbers,findElement);

// console.log(geteight);


// findElement(numbers, function(numbers){
// 	return numbers % 2 == 0; 
// });

// console.log(findElement)


// ===========================
// var numbers = [1,3,5,8, 9, 10];

// var findElement = function(numbers){
//   	for(var i = 0; i <numbers.length; i++){
// 		  if((numbers[i]%2)== 0){
// 			return numbers[i];
// 		}
// 	}  
// }

// var geteight = findElement(numbers,findElement);

// console.log(geteight);




// // findElement([1,3,5,9], function(num){reutrn num % 2 === 0})
// // Return false

// var numbers = [1,3,5,8, 9, 10];

// var findElement = function(numbers){
//   	for(var i = 0; i <numbers.length; i++){
// 		  if((numbers[i]%2) != 0){
// 			return false;
// 		}
// 	}  
// }

// var geteight = findElement(numbers,findElement);

// console.log(geteight);



// var findElement = function(numbers){
//   	for(var i = 0; i <numbers.length; i++){
// 		  if((numbers[i]%2) != 0){
// 			return false;
// 		}
// 	}  
// }













