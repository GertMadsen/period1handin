// Hoisting of varibles:

x = 5; 
console.log("This should write '5': "+x);
var x; // moving declaration to the top 
 
console.log("This should write 'undefined': "+y);
var y = 5; // Only the declaration and not the assignment is moved to the top 


//Hoisting of functions

hoisted(); 

function hoisted() {
  console.log('foo');
}

//notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {
   console.log('bar');
};

// When 'use strict' is used - variables has to be declared before you can assign value.

"use strict";
var x;
x = 3.14;

// var y;
y = 2*x; // This will generate error because y is not declared.



