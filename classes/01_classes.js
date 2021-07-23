// ES5 way
function CircleES5(x, y, radius) {
  this.x = x
  this.y = y
  this.radius = radius
}

CircleES5.prototype.move = function(x, y) {
  this.x = x
  this.y = y
};

CircleES5.prototype.area = function() {
  return Math.PI * Math.pow(this.radius, 2)
};

// ES6 way
class CircleES6 {
  constructor(x, y, radius) {
    this.x = x
    this.y = y 
    this.radius = radius
  }
  move(x, y) {
    this.x = x 
    this.y = y
  }
  area() {
    return Math.PI * Math.pow(this.radius, 2)
  }
}

// ES5 way
function ColoredCircleES5(x, y, radius, color) {
  CircleES5.call(this, x, y, radius);
  this.color = color;
}

ColoredCircleES5.prototype = new CircleES5;
ColoredCircleES5.prototype.constructor = CircleES5

// ES6 way
class ColoredCircleES6 extends CircleES6 {
  constructor(x, y, radius, color) {
    this.color = color;
  }
}

// Experiment

class Person {
  
}

class Student {
  
}

module.exports = { 
  CircleES5,
  ColoredCircleES5,
  CircleES6,
  ColoredCircleES6,
  Person,
  Student
}
