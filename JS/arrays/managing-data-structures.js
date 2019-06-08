// SINGLE DIMENSION ARRAYS - one level, no nested arrays
// MULTIDIMENSIONAL ARRAYS - multi level, nested arrays, can also have nested objects
// all arrays have a length property - Arry.length

// ACCESS/CHANGE ARRAY CONTENT - with "bracket notation" []
let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[0];// ourVariable equals "a"
ourArray[1] = "not b anymore";// ourArray now equals ["a", "not b anymore", "c"];
// each item has an index, which acts as a position in the array - starting from 0

// ADD ARRAY ITEMS - with push() and unshift() methods
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];
romanNumerals.unshift('XIX', 'XX');// now equals ['XIX', 'XX', 'XXI', 'XXII']
romanNumerals.push(twentyThree);// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']
// push() adds to the end of the array
// unshift() adds to the start of the array
// you can also pass in variables to these methods, very flexible

// REMOVE OUTER ARRAY ITEMS - with pop() and shift()
// just like push() and unshift(), with a few differences:
// except they have the opposite function
// they don't take parameters
// they can only handle one element at a time
let greetings = ['whats up?', 'hello', 'see ya!'];
greetings.pop();// now equals ['whats up?', 'hello']
greetings.shift();// now equals ['hello']
let popped = greetings.pop();// we can also return the extraction of these methods - popped = 'hello'
// greetings now equals []

// REMOVE ANY ARRAY ITEMS - with splice()
// remove elements form anywhere
// remove any number of consecutive elements
// splice() can take up to 3 parameters:
// the first parameter is the index from which to start removing elements from the array
// the second parameter is the number of elements to delete
let array = ['today', 'was', 'not', 'so', 'great'];// remove 2 elements beginning with the 3rd element
array.splice(2, 2);// array now equals ['today', 'was', 'great']
// splice() modifies the current array and returns a new array with a new value
let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2);// newArray equals ['really', 'happy']
// another example
function sumOfTen(arr) {
  arr.splice(2, 2);
  return arr.reduce((a, b) => a + b);
}
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

// ADD ITEMS - with splice() - third parameter
function colorChange(arr, index, newColor) {
  arr.splice(index, 1, newColor);
  return arr;
}
let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];// we have removed '#bb7e8c' and added '#332327' in its place
colorScheme = colorChange(colorScheme, 2, '#332327');// colorScheme now equals ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']
// another example
function htmlColorNames(arr) {
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');// work with first two params as normal...
  return arr;// ...then specify replacements
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
// returns new array ['DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']

// COPY ARRAY ITEMS - with slice()
// slice() copies, extracts elements into a new array while leaving the array untouched
// slice() only takes 2 params:
// the first param is the index for the start of the extraction
// the second param is the index for the stop mark
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];// todaysWeather equals ['snow', 'sleet'];
let todaysWeather = weatherConditions.slice(1, 3);// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
// for extraction to work, the method result must be assigned to a variable

// COPY AN ARRAY - with spread "..."
let thisArray = [true, true, undefined, false, null];// thatArray equals [true, true, undefined, false, null]
let thatArray = [...thisArray];// thisArray remains unchanged, and is identical to thatArray
// another example
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));
// returns [true, false, true, true, false, true]

// COMBINE ARRAYS - with spread "..."
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ["learning", ...fragment, "is", "fun" ];
  return sentence;
}
console.log(spreadOut());
// combine elements of an array to another at any index
// we can do this instead of concatenating at one end or the other
function quickCheck(arr, elem) {
return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// CHECK FOR THE PRESENCE OF AN ELEMENT - with indeOf()
function quickCheck(arr, elem) {
return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
// as arrays are mutable, its important to confirm elements within them
// returns index position of elemet
// returns "-1" if element does not exist

// ITERATE THROUGH ARRAY ITEMS - with for loops
function filteredArray(arr, elem) {
  let newArr = [];
 for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem)==-1){ //Checks every parameter for the element and if is NOT there continues the code
          newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
            };
          };
  return newArr;
};
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

/// MULTIDIMENSIONAL ARRAYS ///
// access nested arrays with bracket notation = nestedArry[9][1]
let myNestedArray = [
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array', ['deep']],
  ['mutate', 1327.98, 'splice', 'slice', 'push', [['deeper']]],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[['deepest']]]]
];

// ADD KEY VALUE PAIRS TO JS OBJECTS - with dot notation - object.key;...
// ...or we can use bracket notation: object['key'];
// with bracket notation we use quotes, because variables can be evaluated as a property name
let userData = FCC_User['followers']// userData equals 572
// another example
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
foods['bananas'] = 13;
foods['strawberries'] = 27;
foods['grapes'] = 35;
console.log(foods);

// MODIFY AN OBJECT NESTED IN AN OBJECT
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
userActivity.data['online'] = 45;// we use the same notation
console.log(userActivity);
// just like arrays, which are a type of object, objects can be nested with objects, or any other value JS supports

// ACCESS PROPERTY NAMES - with brackets []
