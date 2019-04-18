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
