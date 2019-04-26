const sum = (function() {
  "use strict";
  return function sum(...n) {// using the rest method to allow for flexible input
    return n.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
