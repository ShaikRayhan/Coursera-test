// Object literals and "this"
var literalCircle = { // new object
  radius: 10,
  diameter : 20,
  getArea: function () {
    var self = this;
    console.log(this);

    var increaseRadius = function () {
      self.radius = 20;
    };
    var increaseDiameter = function () {
      self.diameter = 40;
    };
    increaseRadius();
    increaseDiameter();
    console.log(this.radius);
    console.log(self.diameter);
    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(literalCircle.getArea());



