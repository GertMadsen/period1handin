const promiseFactory = require("./promiseFactory.js")

let result = [];

promiseFactory("Hello",2000) 
.then(d=>{
    result.push(d);
    return promiseFactory("Hello Hello", 3000)    
})
.then(d=>{
    result.push(d)
    return promiseFactory("Hello Class", 4000)    
})
.then(d=>{
    result.push(d);
    console.log("All: "+result.join(", "))
})
.catch(err=> console.log(err));