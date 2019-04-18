//the first semicolon can be omitted because the two statements are on separate lines:

a = 3;
b = 5;

/*on this example, the first is
needed because both statements are on the same line:*/

a = 3; b = 5;

var y = x + f
(a + b).toString()// this looks like two seperate lines of code;

//JS interprets it like this because the parenthesis on the second line implies a function invokation fo "f":
var y = x + f(a + b).toString();

// this can be unintentional, so programmers must be explicit with semicolons occasionally

var x = 0
;[x, x + 1, x + 2].forEach(console.log)// defensibe semicolon at the start of the statement
