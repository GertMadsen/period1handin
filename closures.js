
var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {changeBy(1);},
      decrement: function() {changeBy(-1);},
      value: function() { return privateCounter;}
    }
  };


var counter1 = makeCounter();
var counter2 = makeCounter();

counter1.increment();
counter1.increment();
console.log("Counter 1 increased twice = "+counter1.value());

counter2.decrement();
counter2.decrement();
console.log("Counter 2 decreased twice = "+counter2.value());


var storePerson = function() {
    var person = {
        name: "", age:"",
    } 
    return {
        setAge: function(newAge) {
            person.age = newAge;
        },
        setName: function(newName) {
            person.name = newName;
        },
        getInfo: function() { 
            return person.name + ", " + person.age; 
        }
    }
  };

var testPerson = storePerson();

console.log("\nPerson with name Mikkel and age 56 is stored as testPerson.")
testPerson.setName("Mikkel");
testPerson.setAge(56);
console.log("testPerson = "+testPerson.getInfo());