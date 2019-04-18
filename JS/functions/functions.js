function bark(name, weight) { // you can have more than two parametersa
  if (weight > 20) {
    console.log(name + "says WOOF WOOF");
  } else {
    console.log(name + "says woof woof");
  }
}

bark("rover", 23); // function name(argument, arguement);    argument == value
bark("spot", 13);
bark("spike", 53);
bark("lady", 17);

function bake(degrees) {
  var message;

  if (degrees > 500) {
    message = "I'm not a nuclear reacter!";
  } else if (degrees < 100) {
    massage = "I'm not a nuclear fridge!";
  } else {
    message = "Thats good for me";
    setMode("bake");
    setTemp(degrees);
  }

  return message; //
}

var status = bake(350);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var y = 3;

function plus1(x) {
  return x+1
};

plus1(y) // = 4

var square = function(x) {
  return x*x;
};

square(plus1(y))// = 16, inkoveing two functions in one expression
