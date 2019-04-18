w = x+y*z; // in this case, the arithmetic is executed before the assignement.
// precedence order: * - + - =
// assignement is performed after all the operations on the right side are completed

w = (x+y)*z // precedence can be overridden with the explicit use of parentheses
// this example forces the addition to be performed first

typeOf my.function[x](y)// property access and invocation expressions have higher precedence than any of the operators listed in operators.html
