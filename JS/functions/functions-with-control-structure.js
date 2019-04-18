function abs(x) {// a function to calculate an absolute value
  if (x >= 0) {// if executes code if the comparison is true
    return x;
  }
  else {
    return -x;// executes if comparison is false
  }
}

function factorial(n) {
  var product = 1;

  while(n > 1) {
    product *= n;
    n--;
  }
  return product;
}
factorial(4)

function factorial2(n) {// another version using a different loop
  var i, product = 1;
  for (i = 2; i <= n; i++)
  product *= i;
  return product;
}
factorial2(5)
