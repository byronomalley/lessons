// THREE GENERAL REASONS FOR ERROR: SYNTAX, RUNTIME FAILURE, SEMANTIC/ LOGICAL ERRORS

// USING "typeof" TO CHECK THE TYPE OF A VARIABLE
console.log(typeof ""); // outputs "string"
console.log(typeof 0); // outputs "number"
console.log(typeof []); // outputs "object"
console.log(typeof {}); // outputs "object"
console.log(typeof three);// outputs
//JS recognizes 7 types
// 6 primitive, immutable types: Boolean, Null, Undefined, Number, String, Symbol
// 1 mutable type: objects(arrays are a type of object)
//ANOTHER EXAMPLE
let seven = 7;
let three = "3";
console.log(seven + three);// outputs 73
console.log(typeof seven);// outputs number
console.log(typeof three);// outputs string

// CATCHING MISSPELLED VARIABLE AND FUNCTION NAMES

// AVOIDING QUOTATION MARKS INSIDE A STRING - "\"
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';

// USING OR OMMITING THE PARENTHESIS AFTER A FUNCTION CALL
function myFunction() {
  return "You rock!";
}
let varOne = myFunction; // set to equal the body of code in the function
let varTwo = myFunction(); // set to equal the string "You rock!"

// WRONG ORDER OF FUNCTION ARGUEMENTS
function raiseToPower(b, e) {
  return Math.pow(b, e);
}
let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);// outputs 8
//
let power = raiseToPower(exp, base);
console.log(power);// outputs 9

// OFF-BY-ONE ERRORS
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  // loops one too many times at the end
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  // loops one too few times and misses the first character at index 0
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  // Goldilocks approves - this is just right
  console.log(alphabet[k]);
}

// ISSUES WITH VARIABLE SCOPE
function zeroArray(m, n) {
  let newArray = [];// if the variable row were here this wouldnt work
  for (let i = 0; i < m; i++) {
    let row = [];//
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    newArray.push(row);
  }
  return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);
// this returns: [ [0,0], [0,0], [0,0] ]

// INFINITE LOOPS

// dangerous for your browser
