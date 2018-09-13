

function logger(a: any, b: any) {
    console.log(`Value 1: ${a}, Value 2: ${b}`)
}

var a = 1, b = "Hello";

logger(a, b);

function loggerV2(a: number, b: string) {
    console.log(`Value 1: ${a}, Value 2: ${b}`)
}

loggerV2(a, b)

interface IPerson { name: string };
interface IAddress { street: string };

function loggerV3(a: IPerson, b: IAddress) {
    console.log(`Value 1: ${a}, Value 2: ${b}`)
}

loggerV3({ name: "Kurt" }, { street: "Lyngbyvej" })

class Person implements IPerson {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Address implements IAddress {
    street: string;
    constructor(street: string) {
        this.street = street;
    }
}

let person = new Person("Kurt");
let address = new Address("Rødovrevej 58");
loggerV3(person,address);

//Everything above breaks the DRY rule (DRY = dont repeat yourself)

function loggerV4<T,U>(a:T, b:U) {
    console.log(`Value 1: ${a}, Value 2: ${b}`)
}

loggerV4(a,b);

class GenericLogger<T,U> {
    log = (a:T, b:U) => console.log(`Value 1: ${a}, Value 2: ${b}`);
}

var logger1 = new GenericLogger<IPerson, IAddress>();
logger1.log(person,address)
var logger2 = new GenericLogger<number,string>();
logger2.log(1,"Hello")
