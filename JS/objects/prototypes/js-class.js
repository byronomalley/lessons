function Point(x,y) {//constructor to intitialize a new point object
  this.x = x;
  this.y = y;// store function arguements as properties
}// no return necessary

var p = new Point(1, 1); // geometric point 1,1

Point.prototype.r = function() {// define methods for point onjects by assigning them to the prototype object accociated with the constructor function
  reuturn Math.sqrt(// return the square root of x2 + y2
    this.x * this.x +
    this.y * this.y
  );
};// the point object  p inherits the method r
