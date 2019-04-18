var passengers = [ { name: "Jane Doloop", paid: true, ticket: "coach" },// each passenger is represented by an object with a name and paid property, an array of objects
                   { name: "John Creevy", paid: true, ticket: "firstclass" },
                   { name: "Brian Connolly", paid: false, ticket: "firstclass" },
                   { name: "Jarlaith Dunne", paid: true, ticket: "coach" } ];

var products = [ { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
                 { name: "Orange", calories: 160, color: "orange", sold: 12101 },
                 { name: "Cola", calories: 210 , color:  "caramel", sold: 25412},
                 { name: "Diet Cola", calories: 0 , color: "caramel", sold: 43922 },
                 { name: "Lemon", calories: 200 , color: "clear", sold: 14983 },
                 { name: "Raspberry", calories: 180 , color: "pink", sold:  9427},
                 { name: "Root Beer", calories: 200 , color: "caramel", sold: 9909 },
                 { name: "Water", calories: 0, color: "clear", sold: 6212 } ];

function compareSold(colaA, colaB) {
  if (colaA.sold > colaB.sold) {
    return 1;
  } else if (colaA.sold === colaB.sold) {
    return 0;
  } else {
    return -1;
  }
}

function compareName(colaA, colaB) {
  if (colaA.name > colaB.name) {
    return 1;
  } else if (colaA.name == colaB.name) {
    return 0;
  } else {
    return -1;
  }
}

function compareCalories(colaA, colaB) {
  if (colaA.calories > colaB.calories) {
    return 1;
  } else if (colaA.calories === colaB.calories) {
    return 0;
  } else {
    return -1;
  }
}

function compareColor(colaA, colaB) {
  if (colaA.color > colaB.color) {
    return 1;
  } else if (colaA.color == colaB.color) {
    return 0;
  } else {
    return -1;
  }
}

function printProducts(products) {
  for (var i = 0; i < products.length; i++) {
    console.log("Name: " + products[i].name + ", Calories: " + products[i].calories + ", Color: " + products[i].color + ", Sold" + products[i].sold);
  }
}

products.sort(compareName);
console.log("Products sorted by name:");
printProducts(products);

products.sort(compareCalories);
console.log("Products sorted by calories:");
printProducts(products);

products.sort(compareColor);
console.log("Products sorted by color:");
printProducts(products);

function processPassengers(passengers, testFunction) {// first paramenter is an array, the second is a fumction that tests for a condition in the array
  for (var i = 0; i < passengers.length; i++) {// iterate through the passengers one at a time
    if (testFunction(passengers[i])) {// a function is called within a function, in this case, if this inner function returns true, the containing function returns false
      return false;
    }
  }
  return true;// all passengers have passed the test
}


function checkNoFlyList(passenger) {
 return (passenger.namev === "Dr. Evel");
}


function checkNotPaid(passenger) {
 return (!passenger.paid);
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
  console.log("The plane can't take off, somebody here is on the no-fly list.");
}

var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
  console.log("some cheeky bollocks is jumping on the plane")
}
// !!! functions returning functions  !!!!!!
function createDrinkOrder(passenger) {// this function knows how to process each passenger drink order
  var orderFunction; // create a variable to hold the function

  if (passenger.ticket === "firstclass") {// conditional code to check the passengers ticket only once
    orderFunction = function() {
      alert("Would you like a cocktail or wine, gwwd saaar?");
    };
  } else {
    orderFunction = function() {
      alert("would you like a coke or water?");
    };
  }
  return orderFunction;
}

function serveCustomer(passenger) {
  var getDrinkOrderFunction = createDrinkOrder(passenger);// the variable getDrinkOrderFunctin now returns a function
  getDrinkOrderFunction();// we use this function we get back from createDrinkOrder whenever we need to get a drink order for this passenger

  createDrinkOrder(passenger);// these functions have the same arguement
}

function servePassengers(passengers) {
  for (var i = 0; i < passengers.length; i++) {// now we iterate over the passengers in the array, and calling serveCustomer for each passenger
    serveCustomer(passengers[i]);
  }
}

servePassengers(passengers);
