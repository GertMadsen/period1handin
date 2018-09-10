var personObj = {
    name: "Gert Madsen",
    birthday: "21. marts 1971",
    hobby: "Diving",
    email: "gertlehmann@hotmail.com",
};

console.log("\nProperties before delete:")
for (prop in personObj) {
    console.log(prop);
}

delete personObj.hobby;

console.log("\nProperties after delete:")
for (prop in personObj) {
    console.log(prop);
};

console.log("\nObject has property 'name': " + personObj.hasOwnProperty("name"));
console.log("Object has property 'phone': " + personObj.hasOwnProperty("phone"));


function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function() {return this.firstName + " " + this.lastName;};
};

var itsMe = new Person("Gert","Madsen",47);
console.log("\nPersons full name: "+itsMe.fullName());

console.log("\nPersons props before delete: ");
console.log(Object.getOwnPropertyNames(itsMe));
delete itsMe.age;
console.log("\nPersons props after age being deleted: ");
console.log(Object.getOwnPropertyNames(itsMe));

