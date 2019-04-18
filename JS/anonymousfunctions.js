function handler() { alert("page is loaded"); }
window.onload = handler;

window.onload = function() { alert("page is loaded"); };

function cookieAlarm() {
  alert("Take out the cookies");
};

setTimout(cookieAlarm, 600000);


setTimeout(function() { alert("Take out the cookies");}, 600000)// inline anonymous function

setTimeout(function() {
  alert("Take out the cookies");
}, 600000)// same function with whitespace
