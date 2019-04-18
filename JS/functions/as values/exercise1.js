var passengers = [ { name: "Jane Doloop", paid: true },// each passenger is represented by an object with a name and paid property, an array of objects
                   { name: "John Creevy", paid: true },
                   { name: "Brian Connolly", paid: false },
                   { name: "Jarlaith Dunne", paid: true } ];

function checkPaid(passengers) {
  for (var i = 0; i < passengers.length; i ++); {
    if (!passengers[i].paid) {// ! - not equal to
      return false;
    }
  }
  return true;
}

function checkNoFly(passengers) {
  for (var i = 0; i < passengers.length; i ++); {
    if (onNoFlyList(!passengers[i].paid)) {
      return false;
    }
  }
  return true;
}

function checkNoFly(passengers) {
  for (var i = 0; i < passengers.length; i ++); {
    console.log(passengers[i].name);
      return false;
    }
  }
  return true;
}
