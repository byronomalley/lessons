const x = 10;

const colour = x > 10 ? 'red' : 'blue' ; // if 'x' is greater than 10, 'then' the colour is red, 'else' it is blue

switch (colour) {
  case 'red':
    console.log('the colour is red');
    break;
  case 'blue':
    console.log('the colour is blue');
  default:
    console.log('the colour is neither red or blue');
    break;
}

// TRUE OR FALSE FUNCTION
function checkEqual(a, b) {
 return a == b ? true : false;
}
checkEqual(1, 2);

// THREE CONDITIONS 
function checkSign(num) {2
  return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";// note that the condition for "negative" is implied
}
checkSign(10);
//  USE THIS - INSTEAD OF:
// function checkSign(num) {
//   if(num === 0) {
//     return "zero";
//   }
//   else if(num > 0) {
//     return "positive";
//   }
//   else {
//     return "negative";
//   }
// }
