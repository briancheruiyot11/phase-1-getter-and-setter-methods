// Add your Circle class here

// Circle
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Diameter getter and setter
  get diameter() {
    return this.radius * 2;
  }

  set diameter(value) {
    this.radius = value / 2;
  }

  // Circumference getter and setter
  get circumference() {
    return Math.PI * this.diameter;
  }

  set circumference(value) {
    this.radius = value / (2 * Math.PI);
  }

  // Area getter and setter
  get area() {
    return Math.PI * this.radius ** 2;
  }

  set area(value) {
    this.radius = Math.sqrt(value / Math.PI);
  }
}
