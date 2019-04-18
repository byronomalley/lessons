function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.bark = function() {
    if (this.weight > 25) {
      alert(this.name + " woof!");
    } else {
      alert(this.name + " yip!");
    }
  };
}
// this creates three onjects with references to the bark function
// this can create memory issues
var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("fluffy", "Poodle", 30);
var spot = new Dog("spot", "Chihuahua", 10);

// !!!!!!!! prototype !!!!!!!!!!!!
//  Dog.prototype --- in this case a function has a property, JS considers a function, and everything else an object

function Dog(name, breed, weight) {
  this.name = name;// each dog will have its own name, weight and breed, so these are apropriate in the constructor
  this.breed =  breed;
  this.weight = weight;
}

function ShowDog(name, breed, weight, handler) {// this constructor has everything needed to make a dog, plus showdog properties
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.handler = handler;
}

ShowDog.prototype = new Dog();// the ShowDog.prototype is now an instance of "Dog", thus linking the chain of inheritance
ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function() {
  console.log("Stack");
};
ShowDog.prototype.bait function() {
  console.log("Bait");
};
ShowDog.prototype.gait function(kind) {
  console.log(kind + "ing");
};
ShowDog.prototype.groom function() {
  console.log("Groom");
};

var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
Dog.prototype.species = "Canine";

Dog.prototype.bark = function() {
  if(this.weight > 25) {
    alert(this.name + " woof!");
  } else {
    alert(this.name + " yip!");
  }
};

Dog.prototype.run = function() {// this is chaining: Starting with the "Dog" constructor and grabing the prototype property, which is a reference to the property object that has a species property
  console.log("Run!");
};

Dog.prototype.wag = function() {
  console.log("Wag!");
};

Dog.prototype.sitting = false;// this property represents a state in which the instance of "dog" is, which is defined by a conditional, initialised to false

Dog.prototype.sit = function() {
  if (this.sitting) {
    console.log(this.name + " is already sitting.");
  } else {// if the dog is not sitting, "sitting" is set to true, which overrides the prototype property and sets the value in the instance
    this.sitting = true;
    console.log(this.name + " is now sitting.");
  }
};
// and we make our instances as normal
var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("fluffy", "Poodle", 30);
var spot = new Dog("spot", "Chihuahua", 10);

spot.hasOwnProperty("sitting")// returns false because "sitting" is defined in the prototype
spot.sitting = true;
spot.hasOwnProperty("sitting")// retutns true because spot now has his own sitting property

spot.bark = function() {// over writting the prototype for spot
  console.log(this.name + " says Woof!")
};

scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);
fido.sit();
