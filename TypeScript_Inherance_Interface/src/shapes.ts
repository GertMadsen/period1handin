const PI = 3.141593;

interface IShape {
     _color: string
}

class Shape implements IShape {
    static counter: number = 0;
    public _color: string
    constructor(color: string) {
        Shape.counter++;
        this._color = color;
    }
    set color(color) { this._color = color }
    get color() { return this._color }

    get counter() { return Shape.counter }

    get area() { return undefined; }
    get perimeter(): any { return undefined; }
    toString() { return `Shape - Color: ${this._color}` }
}


interface ICircle {
    _color: string
    _radius: number
}

class Circle extends Shape implements ICircle {
    public _radius: number;
    constructor( color: string, radius: number) {
        super(color)
        this._radius = radius
    }
    set radius(radius) { this._radius = radius }
    get radius() { return this._radius }
    get area() { return PI * this._radius * this._radius; }
    get perimeter() { return 2 * PI * this._radius; }
    toString() { return `Circle - Color: ${this._color}, Radius: ${this._radius}` }
}


interface ICylinder {
    _color: string
    _radius: number
    _height: number
}

class Cylinder extends Circle implements ICylinder {
    public _height: number
    constructor (color: string, radius: number, height: number) {
        super(color, radius)
        this._height = height
    }
    set height(height) {this._height = height}
    get height() {return this._height}
    get area() { return PI*this._radius*this._radius + 2*PI*this._radius*this._height; }
    get perimeter() { return undefined; }
    get volume() {return PI*this._radius*this._radius*this._height}
    toString() { return `Cylinder - Color: ${this._color}, Radius: ${this._radius}, Height: ${this._height}` }
}


let shapeA = new Shape("red");
let shapeB = new Shape("white");
console.log(shapeA.toString());
console.log(`Number of Shape instances: ${Shape.counter}`);

let circleA = new Circle("green",10);
console.log(circleA.toString());
console.log(`Area: ${circleA.area}`);
console.log(`Perimeter: ${circleA.perimeter}`)

let cylinderA = new Cylinder("orange",10,8);
console.log(cylinderA.toString());
console.log(`Area: ${cylinderA.area}`);
console.log(`Perimeter: ${cylinderA.perimeter}`)
console.log(`Volume: ${cylinderA.volume}`)
console.log(`Number of Shape instances: ${Shape.counter}`);
