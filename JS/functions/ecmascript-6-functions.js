const magic = () => new Date()

// instead of

var magic = function() {
  "use strict";
  return new Date();
};

// CONCATENATING ARRAYS
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));
/*
- this is ARROW FUNCTION SYNTAX
- when creating unnamed functions that dont have to be used anywhere else
- when only a return statement is executed, the keyword "return" can be ommitted
*/

// FUNCTIONS WITH DEFAULT PARAMETERS
function greeting(name = "Anonymous") {
  return "Hello " + name;
}
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
