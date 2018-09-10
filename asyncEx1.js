const fetch = require("node-fetch");
var now = require("performance-now")

const URL = "https://swapi.co/api/people/";

function fetchPerson(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => resolve(res.json()))
            .catch(err => reject(err))
    })
}

async function printNames() {
    var start = now()
    console.log("Before");
    const person1 = await fetchPerson(URL + 1);
    const person2 = await fetchPerson(URL + 2);
    console.log(person1.name);
    console.log(person2.name)
    console.log("After all");
    var end = now()
    console.log("Runtime for printNames():"+(end - start).toFixed(2)) 
}

async function printNamesParallel() {
    var start = now()
    console.log("Before");
    const promise1 = fetchPerson(URL + 1);
    const promise2 = fetchPerson(URL + 2);
    const person1 = await promise1;
    const person2 = await promise2;
    console.log(person1.name);
    console.log(person2.name)
    console.log("After all");
    var end = now()
    console.log("Runtime for printNamesParallel(): "+(end - start).toFixed(2)) 
}

//printNames();
printNamesParallel();
