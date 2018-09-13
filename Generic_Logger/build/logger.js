"use strict";
function logger(a, b) {
    console.log("Value 1: " + a + ", Value 2: " + b);
}
var a = 1, b = "Hello";
logger(a, b);
function loggerV2(a, b) {
    console.log("Value 1: " + a + ", Value 2: " + b);
}
loggerV2(a, b);
;
;
function loggerV3(a, b) {
    console.log("Value 1: " + a + ", Value 2: " + b);
}
loggerV3({ name: "Kurt" }, { street: "Lyngbyvej" });
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Address = /** @class */ (function () {
    function Address(street) {
        this.street = street;
    }
    return Address;
}());
var person = new Person("Kurt");
var address = new Address("Rødovrevej 58");
loggerV3(person, address);
//Everything above breaks the DRY rule (DRY = dont repeat yourself)
function loggerV4(a, b) {
    console.log("Value 1: " + a + ", Value 2: " + b);
}
loggerV4(a, b);
var GenericLogger = /** @class */ (function () {
    function GenericLogger() {
        this.log = function (a, b) { return console.log("Value 1: " + a + ", Value 2: " + b); };
    }
    return GenericLogger;
}());
var logger1 = new GenericLogger();
logger1.log(person, address);
var logger2 = new GenericLogger();
logger2.log(1, "Hello");
//# sourceMappingURL=../src/src/logger.js.map