funtion     addScore (level,score) {
//keyword   name     zero or more parameters -- arguments must be given in the correct order

  var bonus = level * score * .1;
  return score + bonus;
  // body
  // variables declared inside a function can only be used inside a function --  variable scope - global or local
  // values or expressions are returned on calling the function
}


// the rules for a function name are the same for variable names - they need to make sense and indicate what they do
// variable names should be meaningfull -- but old conventions make exceptions to this rule -- x y i k
// functions can be declared anywhere - javascript makes two passes over the page - the first gettong all the functions and definitions and executing on the second
