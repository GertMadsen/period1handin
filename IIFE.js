var result = (function () { 
    var name = "Barry"; 
    return name; 
})(); 
// Immediately creates the output: 
console.log(result); // "Barry"


(function(){
    var superSecret = 195;
    console.log("\nThe variable superSecret is private");
    console.log("superSecret = "+superSecret);
    console.log("and furthermore the function can not be acccesed again as with a named function.");
  })()
  
//Privacy 
//console.log(superSecret);

// "counter" is a function that returns an object with properties, which in this case are functions.
var counter = (function () {
    var i = 0;

    return {
        get: function () {
            return i;
        },
        set: function (val) {
            i = val;
        },
        increment: function () {
            return ++i;
        }
    };
})();

// These calls access the function properties returned by "counter".
console.log("\nCounter: "+counter.get());       // 0
counter.set(3);
counter.increment(); // 4
counter.increment(); // 5
console.log("Counter: "+counter.get());       
