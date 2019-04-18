var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52,
              44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53,
              55, 61, 51, 44];
var highScore = 0;
var output;
var i = 0;
while (i < scores.length) {
  output = "bubble solution #" + i + " score: " + scores[i];
  console.log(output);// output string
  i = i + 1;
}

//   variable initialisation - conditional test - increment the counter
for (var i = 0; i < scores.length; i = 1 + 1) { // "fpr loop does the same thing as "while"
  output = "bubble solution #" + i + " score: " + scores[i];
  console.log(output);
}

scores[scores.length-1] //last element of the array
scores[4] = 9 //  add new or alter existing assignement
tally = []// empty array

// arrays and objects can hold other arrays and objects

var points = [// an array with two elements
  {x:0, y:0},// each element is an object
  {x:1, y:1}
];

var data = [//An object with two properties
  trail1: [[1,2], [3,4]],// the value of each property is an array
  trial2: [[2,3], [4,5]]// the elements of the arrays are arrays
];
// syntax for listing array elements withtin square braces or mapping object property names to property values inside curly braces is known as an initializer expression
