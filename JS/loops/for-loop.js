// structure === for ([initialization]; [condition]; [final-expression])
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// CUSTOM INCREMENTS

var ourArray = [];
for (var i = 1; i < 9; i += 2) {// increments dont have to be unary
  ourArray.push(i);
}

// COUNTING BACKWARDS

var myArray = [];// counting backwards
for (var i = 9; i > 0; i-=2) {
  myArray.push(i);
}

// ITERATING THROUGH ARRAYS

var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {// iterating through an array
  ourTotal += ourArr[i];
}

// MULTIPLYING VARIABLES TO INDEX VALUES OF MULTIDEMENSIONAL ARRAYS 

function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var k = 0; k < arr[i].length; k++) {
      product *= arr[i][k];
    }
  }
  return product;
}
multiplyAll([[1],[2],[3]]);

/*
initialization statement is declared once before the loop begins
conditional statement declares the condition for the loop so that it continues so long as it evaluates true. if the condition is false befor execution, the loop never executes
final expression is exected at the end of the loop, ususally a decrement or increment, befor the next conditional check
*/

C:\Users\byron\Documents\CODE\LESSONS\JS
