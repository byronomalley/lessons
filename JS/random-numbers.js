// RANDOM NUMBERS BETWEEN 0 AND 9
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
// math floor rounds down, math random gives us a decimal between 0 and 1
// this will be a number between 0 and 9

// RANDOM NUMBERS BETWEEN A SPECIFIED RANGE 
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}
var myRandom = randomRange(10, 20);
