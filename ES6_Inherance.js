const PI = 3.141593

class Shape {
    constructor(color){
      this._color = color;
    }  
    set color(color) { this._color = color }
    get color() { return this._color }

    getArea() { return undefined; }
    getPerimeter() { return undefined; }
    toString() { return `Color: ${this._color}` }
  }

class Circle extends Shape {
    constructor (radius, color) {
        super(color)
        this._radius = radius
    }
    set radius(radius) {this._radius = radius}
    get radius() {return this._radius}
    getArea() { return PI*this._radius*this._radius; }
    getPerimeter() { return 2*PI*this._radius; }
    toString() { return `Color: ${this._color}, Radius: ${this._radius}` }
}

class Cylinder extends Circle {
    constructor (radius, color, height) {
        super(radius, color)
        this._height = height
    }
    set height(height) {this._height = height}
    get height() {return this._height}
    get Area() { return PI*this._radius*this._radius + 2*PI*this._radius*this._height; }
    get Perimeter() { return undefined; }
    get Volume() {return PI*this._radius*this._radius*this._height}
    toString() { return `Color: ${this._color}, Radius: ${this._radius}, Height: ${this._height}` }
}

let firstShape = new Shape("red");
console.log(firstShape.toString());
firstShape.color = "blue";
console.log(`New color: ${firstShape.color}`);
console.log(`Area: ${firstShape.getArea()}`);
console.log(`Perimeter: ${firstShape.getPerimeter()}`)

console.log("\n")

let firstCircle = new Circle(10, "green");
console.log(firstCircle.toString())
firstCircle.radius = 12;
console.log(`New radius: ${firstCircle.radius}`);
console.log(`Area: ${firstCircle.getArea()}`);
console.log(`Perimeter: ${firstCircle.getPerimeter()}`)

console.log("\n")

let firstCylinder = new Cylinder(10, "orange",8);
console.log(firstCylinder.toString())
firstCylinder.height = 10;
console.log(`New height: ${firstCylinder.height}`);
console.log(`Area: ${firstCylinder.Area}`);
console.log(`Perimeter: ${firstCylinder.Perimeter}`)
console.log(`Volume: ${firstCylinder.Volume}`)