console.log( "Hello World");

// Loop for(initial expression;condition;increment);
 for(i = 0; i < 11; i ++) {
 	console.log(i);
 }

 // finding even number

 for(i=1; i <= 10;i ++){
    if(i % 2 === 0){
      console.log(i + ' is even');
    }
    
}

//using arrays for loops-- lenght of array (how many elements)- the amount that is listed, placement is when you start with 0//
var classmates = ["Bridjet", "Nate", "Ann","Reuben"];
undefined
for(i=0; i < classmates.length;  i++){
    console.log(classmates[i]);
}
VM742:2 Bridjet
VM742:2 Nate
VM742:2 Ann
VM742:2 Reuben

// for .. in // loop through an object and display its key and attributes/properties // name=(key) "chris"=(attribute)
var someObject = {};
undefined
someObject
Object {}
typeof Object
"function"
typeof someObject
"object"
someObject.name = "Chris"
"Chris"
someObject
Object {name: "Chris"}
someObject.height = 6
6
someObject
Object {name: "Chris", height: 6}
for(prop in someObject){
    console.log(prop);
}
VM1003:2 name
VM1003:2 height
undefined

//
for(prop in someObject){
    console.log(someObject[prop]);
}
VM1046:2 Chris
VM1046:2 6


//Practice///
//
 for(i=1; i <= 20;i ++){
    if(i % 2 === 0){
      console.log(i + ' is even');
    }
    
}
// to get to zero you would have to add "i" which starts at 100 to mybagofbeans which is 50 to equal 150 so the new value of mybagofbeans is 150!
// myBagofBeans = i + myBagofBeans; ---- you are adding the value of i (100,99,98 etc.) by the value of bagofbeans which will keep changing! 
var myBagOfBeans = 50

for(i=100; i >= 0;i--){
    if(i % 2 === 0){
      myBagOfBeans = i+ myBagOfBeans; 
		console.log(myBagOfBeans)
    }
    
}

//Looping and then seperate them by cat.//

var thingsYouConsume = ['cheese', 'pepperoni', 'sausage','blue cheese', 'coca cola', 'lemonade', 'dough', 'beer', 'wine', 'ranch', 'bbq sauce'];

var food = []
var drinks = []
var sauces = []

for(i= 0; i < thingsYouConsume.length; i++){
	if(thingsYouConsume[i] === "cheese" || thingsYouConsume[i] === "pepperoni" || thingsYouConsume[i] === "sausage" || thingsYouConsume[i] === "dough"){
		food.push(thingsYouConsume[i]);
		console.log(food)
	}
 else if (thingsYouConsume[i] === "coca cola" || thingsYouConsume[i] === "lemonade" || thingsYouConsume[i] === "beer" || thingsYouConsume[i] === "wine"){
 		drinks.push(thingsYouConsume[i]);
 		 console.log(drinks)
 		}
 else {
 	sauces.push(thingsYouConsume[i]);
 	console.log(sauces)
 }

}

//loop through the array and push items//

var mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts',
 3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2, "I want the calzone from pizanos", 
 "Death blow", "Firestorm", "48", 30]

 var num = [];

 for(i= 0; i < mixedArray.length; i++){
 	if(typeof mixedArray[i] === "number"){
 		num.push(mixedArray[i]);
 		console.log(num)
 	}
 	}

 	console.log(mixedArray);
 	console.log(num);

//var dinner = [];

// loop through array using a counter (i is a counter, and increments by 1 (the i++ part), and stops counting before it gets the the length of the array)
for(i = 0; i <  food.length; i++) {
 // checking if the item at the food array at index [i] matches the item "bun"
 if(food[i] === "bun") {
   // pushing the item that matched the word "bun" at food[i] into the new array
   dinner.push(food[i]);
 }
}

var food = ['bun', "jalepeno cheddar", "elk", "beef", "1954 ford mustang", 1.14, 1.23, 'hot dog', 
"gary clark jr", " I'lll never fall in love again", "mustard", "ketchup", 30, 50, 80, "grilled onions", "egg", "Dr. Suess"]

var dinner = [];

for(i=0; i < food.length; i++){
	if(food[i] = "bun"){
		dinner.push(food[i]);
		console.log(food);
	}
 }

var colorObject={red: 'red', blue: 'blue', cyan: 'cyan'};

for(key in colorObject){
	console.log(key);
}


var seinfeld = {cosmo: "kramer", jerry: "Seinfeld", george: "constanza", elaine: "bennis"}

for(key in seinfeld){
	console.log(key);
}

var profile = {name: "Elon Musk", occupation: "space man", hobbies: ["paypal", "space X", "rocket science"]}

for(key in profile){
	console.log(key)
}


//use for in loop because these are object//
var sandwhich = {name: "sunday morning special", bread: "ciabatta", cheese: "pepper jack", green: "arugala", redStuff: "cherry tomatoes", heated: true}

for(key in sandwich){
	console.log(key)
}

//use for loop 

var oldTime = ["benton flippen", "carter family", "roscoe Holcomb", "gus cannon", "Tommy Jarrell"];

for(i=0; i<oldTime.length; i++){
	console.log(oldTime[i])
}


var zeppelin = ["In through the out door", "Zep 1", "Zep 2", "Zep3", "Zep4", "Physical Graffiti"]

for(i=0;i<zeppelin.length; i++){
	console.log(zeppelin[i])
}

//Homework//
 for(i=1;i<= 20;i ++){
    if(i % 2 === 0){
      console.log(i + 'this even');
    }

    else{
    	console.log(i +  'this is odd')
    }
}
    
for(i=1;i<= 100;i ++){
    if(i % 3 === 0){
      console.log(i + 'Fizz');
    }

    else if( i % 5 === 0){
    	console.log(i +  'Buzz')
    }

    else{
    	console.log(i + 'FizzBuzz')
    }
}


// this is loop similar to the myBagOfBeams--reference that---
//example belows states in the first line: that the variable toPrint equals some string (""), you start at 1, i (1,2,3,etc.) has to be less than or equal to 5, 
//and you are adding one each time. The second line: to print a string on repeat you must have the variable toPrint = 'x' (some number).repeat(i) (i=item)

var toPrint= ""

for(i=1; i <= 5; i ++){
	toPrint = 'x'.repeat(i);
	console.log(toPrint)
	
}

//printing the keys and values-- if you want to list both the key/prob (a:) and attritube/value (1, 2, 3)
var alphabet ={a:1, b:2, c:3};

for(prop in alphabet){
	console.log(prop, '=', alphabet[prop]);
} 

//

 //conscending list in a string: first line 99-0--starting at 99 and going all the way down to 0


for(x = 99; x >= 0; x--) {
   if(x >= 1) {
     console.log(x + " bottles of beer on the wall, " + x + " bottles of beer. Take one down, pass it around, " + (x-1) + " bottles of beer on the wall.")
   }
   else {
     console.log("You have no more bottles of beer.")
   }
 }






