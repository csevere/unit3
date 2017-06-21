// var students = ['Rissa', 'Merilee', 'Chris', 'Stephen'];
// students.map((student, index)=>{
// 	console.log(student); 
// });


function successCallback(result){
	console.log("Success: " + result);
}

function failureCallback(error){
	console.log("Failed: " + error);
}

function checkName(name, winning, losing){
	if(name == "Rob"){
		winning("Name is Rob")
	}else{
		losing("Sorry. Not Rob.")
	}
}
checkName("Rob", successCallback, failureCallback); 

// so successCallback("Name is Rob")
// result = winning("Name is Rob")
// output > "Sucess: Name is Rob"

// so failureCallback("Sorry. Not Rob")
// error = losing("Sorry. Not Rob")
// output > "Faled: Sorry. Not Rob"


// What is a promise?
// it is just a JS constructor that gives you a few methods:
// --all
// --race
// --reject
// --resolve
// --then 


let myFirstPromise = new Promise((resolve, reject)=>{
	// resolve and reject are callbacks
	// we will run resolve when we are done with out async stuff
	//we will run reject when if it failed
	//setTimeout will stand in as an AJAX or sql request
	setTimeout(function(){
		resolve("Success!")

	},250)  //waiting for the even to happen 

})

// output>> {Pending}  <<it's an object

console.log(myFirstPromise)
myFirstPromise.then((successMessage)=>{
	// then will wait until this has called result
	console.log(successMessage)
	console.log(myFirstPromise)
});
console.log(myFirstPromise)

//



///////////////////////
function one(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve('2 seconds have passed');
		}, 4000)
	}); 
};


function two(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve('2 seconds have passed');
		}, 2000)
	}); 
};





var promiseOne = one(); //have a value of pending until it's resolved
var promiseTwo = two();
console.log(promiseOne)
promiseOne.then((successMsg)=>{
	console.log(successMsg); 
});

var promises = [];
promises.push(promiseOne);
promises.push(promiseTwo)

// data is an array 

//all is method that will check array//will run when all have been resolved

Promise.all(promises).then((data)=>{
	console.log("All done")
	console.log(data)

});



//race will execute either one or the other in the array 
Promise.race(promises).then((data)=>{
	console.log("Someone is done")
	console.log(data)
});







