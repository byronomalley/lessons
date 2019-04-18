var count = 0;// global variable, if it were local to the handleClick function, it would be reinitialised on every click 

window. onload = function() {
  var button = document.getElementById("click");
  button.onclick = handleClick;
};

function handleClick() {
  var message = "you clicked me ";
  var div = document.getElementById("message");
  count++;
  div.innerHTML = message + count + " times";
}
