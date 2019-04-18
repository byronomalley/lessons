var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54]; // numbers grouped in an array assigned to a variable
var solution2 = scores[2];// arrays are based on zero -- solution 2 is the third number along
alert("Solution 2 produced " + solution2 + "bubbles.");
scores[4] = 100; // you can update a value within an array like so

var numSolutions = scores.length; // length property -- always one more than the last number in the index
scores[scores.length - 1]; // getting the final value -- index is always one behind
