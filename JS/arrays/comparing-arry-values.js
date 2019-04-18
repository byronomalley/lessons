function compareNumbers(num1, num2) {
  if (num1 > num2) {
    return 1;
  } else if (num1 === num2) {
    return 0;
  } else {
    return -1;
  }
}

var numbersArray = [60, 50, 22, 44, 58, 54];
numbersArray.sort(compareNumbers);// the sort method arranges the numbers in ascending order 
console.log(numbersArray);
