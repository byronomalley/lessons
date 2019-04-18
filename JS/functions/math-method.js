points.dist = function() {// a method for calculating the distance between points
  var p1 = this[0];
  var p2 = this[1];
  var a = p2.x-p1.x;// difference in X coordinated
  var b = p2.y-p1.y;// difference in y coordinates
  return Math.sqrt(a*a + b*b);// Pythagorea theorem, Math.sqrt calculates square root
};

points.dist()
