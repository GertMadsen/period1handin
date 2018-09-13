"use strict";
const PI = 3.141593;
class Shape {
    constructor(color) {
        Shape.counter++;
        this._color = color;
    }
    set color(color) { this._color = color; }
    get color() { return this._color; }
    get counter() { return Shape.counter; }
    get Area() { return undefined; }
    get Perimeter() { return undefined; }
    toString() { return `Shape - Color: ${this._color}`; }
}
Shape.counter = 0;
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this._radius = radius;
    }
    set radius(radius) { this._radius = radius; }
    get radius() { return this._radius; }
    get Area() { return PI * this._radius * this._radius; }
    get Perimeter() { return 2 * PI * this._radius; }
    toString() { return `Circle - Color: ${this._color}, Radius: ${this._radius}`; }
}
class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        this._height = height;
    }
    set height(height) { this._height = height; }
    get height() { return this._height; }
    get Area() { return PI * this._radius * this._radius + 2 * PI * this._radius * this._height; }
    get Perimeter() { return undefined; }
    get Volume() { return PI * this._radius * this._radius * this._height; }
    toString() { return `Cylinder - Color: ${this._color}, Radius: ${this._radius}, Height: ${this._height}`; }
}
let shapeA = new Shape("red");
let shapeB = new Shape("white");
console.log(shapeA.toString());
console.log(`Number of Shape instances: ${Shape.counter}`);
let circleA = new Circle("green", 10);
console.log(circleA.toString());
console.log(`Area: ${circleA.Area}`);
console.log(`Perimeter: ${circleA.Perimeter}`);
let cylinderA = new Cylinder("orange", 10, 8);
console.log(cylinderA.toString());
console.log(`Area: ${cylinderA.Area}`);
console.log(`Perimeter: ${cylinderA.Perimeter}`);
console.log(`Volume: ${cylinderA.Volume}`);
console.log(`Number of Shape instances: ${Shape.counter}`);
//# sourceMappingURL=../src/src/shapes.js.map