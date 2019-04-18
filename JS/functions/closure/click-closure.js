window. onload = function() {
  var count = 0;// all variables are local to window.onload
  var message = "you clicked me ";
  var div = document.getElementById("message");

  var button = document.getElementById("click");
  button.onclick = function() {// setting the click handler as a function expression assigned to the button.onclick property
    count++;                   // this means we can reference div, message and count in the function -- lexical scoping
    div.innerHTML = message + count + " times";
  }// this function has three variables: div, message and count, so the closure is created for the click handler function,
}; // so what gets assigned to the buttons onclick property is closure

// the browser makes a closure for the function thats assigned to the button onvclick property, the environment has the div, message and count variables
// the div variable in the closure holds an object, when div was initialised on widow onload, we stored the object returned from getElementById in the div variable so we dont have tp get it again -- saves time                                 
