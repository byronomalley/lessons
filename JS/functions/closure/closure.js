function makeCounter() {// we create closure by returning a function from a function
  var count = 0;// local variables are safer, this is a free variable

  function counter() {
    count = count + 1;
    return count;
  }
  return counter;
}

var doCount = makeCounter();// the makeCounter function is called along with its environment which contains its variable -- making closeure
console.log(doCount());// with doCount we can refer to count variable without meking it global
console.log(doCount());
console.log(doCount());



function makeTimer(doneMessage, n) {// we can create closure by passing a function to a function

  setTimeout(function() {// this is a function
    alert(doneMessage);// this is a free variable that is used as a handler for setTimeout
  }, n);
}

makeTimer("cookies are done!", 1000);// this is passing a function expression that contains a free variable "doneMessage" to the function "setTimeout"
                                     // when we evaluate a function expression we get a function reference, which is passed into "setTimeout"
                                     // setTimout method holds on to this function and its environment -- a closure -- and then it calls the function 1 second later
