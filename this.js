var test = {
    prop: 42,
    func: function () {
        return this.prop;
    },
};

console.log("This should write '42': " + test.func());


// this as global or window

function f1() {
    return this;
}
// In a browser:
//console.log(f1() === window); // true 

// In Node:
console.log(f1() === global); // true  


// this when using 'use strict' is what is set before entering execution

function f2() {
    'use strict'; // see strict mode
    return this;
}

console.log(f2() === undefined); // true


// Using bind on function
function f() {
    return this.a;
}

var g = f.bind({ a: 'azerty' });
console.log(g()); // azerty

var h = g.bind({ a: 'yoo' }); // bind only works once!!!
console.log(h()); // azerty



// Using call and apply with this:

function add(c, d) {
    return this.a + this.b + c + d;
}

var o = { a: 1, b: 3 };

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as 
// arguments in the function call
console.log(add.call(o, 5, 7));  // 16

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
console.log(add.apply(o, [10, 20])); // 34


