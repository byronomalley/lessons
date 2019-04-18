var now = new Date();

var emptyArray = new Array();// this has length of 0
emptyArray[0] = 99; // add to it like this

var items = new Array();
var items = []; // these two expressions do the same thing, [] is a shorthand for using the array constuctor directly

// add array objects with a specific size like so:
var oddNumbers = new Array(3);// this is length 3
oddNumbers[0] = 1;
oddNumbers[1] = 2;
oddNumbers[2] = 5;

oddNumbers.reverse();// reverses the order of the array, it changes the original array

var aString = oddNumbers.join(" - ");// join method creates a string from the values of the array, placing " - " between each oddNumbers

var areAllOdd = oddNumbers.every(function(x) {// "every" method take a function and tests each value in an array to see if the function returns true or false
  return ((x % 2) !== 0);
});
