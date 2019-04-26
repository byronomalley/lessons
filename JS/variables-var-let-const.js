/*
STRICT MODE
- the string statement "use string" put JS in strict mode
VAR
- can be redeclared without error, this can cause problems
- var variables can have local or global scope

LET
- has block scope, within the curly braces

CONST
- block scope
- cannot be updated
- DECLARE THESE VARIABLES IN ALL CAPS FOR YOUR BUDDIES AT WORK = "const MATH_CONSTANTS"
- objects and arrays are still mutable, const only prevents the updating of varianble identifiers
*/

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}// using  s = [2, 5, 7]; would be illegal
editInPlace();
/*
- use Object.freeze(Obj) to stop data from being mutable: you can no longer add, update or remove properties or values from objects or arrays, all attempts will result in Type error
*/
