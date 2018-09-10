var nameArr = ["Lars","Jan","Peter","Bo","Frederik","Holger","Egon","Ib"];
console.log("\nOrinal name array:");
console.log(nameArr);

//

let shortNames = nameArr.filter((name) => name.length<=3);
console.log("\nNames length of max 3:");
console.log(shortNames);

//

let upperCasedNames = nameArr.map((name) => name.toUpperCase());
console.log("\nAll names upper-cased:");
console.log(upperCasedNames);

//

function myFilter(arr,cb) {
    var tempArr = []; 
    for (var i=0; i < arr.length; i++) {
        if (cb(arr[i])) {
        tempArr.push(arr[i]);
        }
    }
    return tempArr;
};

let longNames = myFilter(nameArr,(name)=>name.length>=5);
console.log("\nNames length of min 5: (using own myFilter function)");
console.log(longNames);

//

function myMap(arr,cb) {
    var tempArr = []; 
    for (var i=0; i < arr.length; i++) {
        tempArr.push(cb(arr[i]));
    }
    return tempArr;
};

let newUpperCased = myMap(nameArr, (name) => name.toUpperCase());
console.log("\nAll names upper-cased: (using won myMap function)");
console.log(newUpperCased);

//

function protoFilter(cb) {
    var tempArr = []; 
    for (var i=0; i < this.length; i++) {
        if (cb(this[i])) {
        tempArr.push(this[i]);
        }
    }
    return tempArr;
};

Array.prototype.myFilter = protoFilter;

let longNamesProto = nameArr.myFilter((name)=>name.length>=4);
console.log("\nNames length of min 4: (using own myFilter prototype)");
console.log(longNamesProto);

//

function protoMap(cb) {
    var tempArr = []; 
    for (var i=0; i < this.length; i++) {
        tempArr.push(cb(this[i]));
    }
    return tempArr;
};

Array.prototype.myMap = protoMap;

let protoUpperCased = nameArr.myMap((name) => name.toUpperCase());
console.log("\nAll names upper-cased: (using won myMap prototype)");
console.log(protoUpperCased);

//

let ulStr = "<ul>\n"+nameArr.map((name) => "<li>"+name+"</li>").join("\n")+"\n</ul>";
console.log("\nUsing map to make an unordered list from name array:");
console.log(ulStr);

//

var names = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},
            {name: "Bo", phone: "79345"},{name:"Frederik",phone:"87126534"}, {name:"Holger",phone:"738291"},
            {name:"Egon",phone:"11992288"},{name:"Ib",phone:"972532"}];
console.log("\nOrinal person data array:");
console.log(JSON.stringify(names));

//

let tableRows = names.map((obj) => "<tr><td>"+obj.name+"</td><td>"+obj.phone+"</td></tr>")
let tableStr = "<table>\n<tr><th>Name:</th><th>Phone:</th></tr>\n"+tableRows.join("\n")+"\n</table>";
console.log("\nUsing map to make a table from person data array:");
console.log(tableStr);

//

var listDiv = document.getElementById("listarea");
var tableDiv = document.getElementById("tablearea");

listDiv.innerHTML = ulStr;
tableDiv.innerHTML = tableStr;

//

function useFilter(){
    let newNameArr = nameArr.filter((str)=>str.length<=3);
    let newListStr = "<ul>"+newNameArr.map((str)=>"<li>"+str+"</li>").join("")+"</ul>";
    listDiv.innerHTML = newListStr;
    
    let newNames = names.filter((obj)=>obj.name.length<=3); 
    let newTableRows = newNames.map((obj) => "<tr><td>"+obj.name+"</td><td>"+obj.phone+"</td></tr>")
    let newTableStr = "<table>\n<tr><th>Name:</th><th>Phone:</th></tr>\n"+newTableRows.join("\n")+"\n</table>";
    tableDiv.innerHTML = newTableStr;
    }

//

let commaSeparated = nameArr.join(",");
console.log("\nNames comma (,) separated :");
console.log(commaSeparated);

let spaceSeparated = nameArr.join(" ");
console.log("\nNames space ( ) separated :");
console.log(spaceSeparated);

let hashSeparated = nameArr.join("#");
console.log("\nNames hash (#) separated :");
console.log(hashSeparated);

//

var numbers = [2, 3, 67, 33];
console.log("\nArray to sum up:");
console.log(numbers);

function sum(accumulator,currVal, index, arr) {
    return accumulator+currVal;  
}

console.log("Sum = "+ numbers.reduce(sum));

//

var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ]

console.log("\nMembers to find average age:");
console.log(JSON.stringify(members));  

function average(accumulator,currObj, index, arr) {
    if (index < arr.length - 1) {
        return accumulator+currObj.age;
    } else {
        let sum = accumulator+currObj.age;
        return sum/arr.length;  
    }
}

console.log("Average age of members = "+ members.reduce(average, 0));

//

var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

var countVotes = function(accumulator, vote ) {
    if (!accumulator[vote]) {
        accumulator[vote] = 1;
    } else {
        accumulator[vote] += 1;
    }
    return accumulator
};

let electionResult = votes.reduce(countVotes,{});
console.log("\nThe votes counted:")
console.log(JSON.stringify(electionResult));

