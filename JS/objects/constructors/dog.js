var dog = {// object literal
  name: "Fido",
  breed: "Mixed",
  weight: 38
};

// OBJECT CONSTRUCTOR FOR CREATING DOGS

function Dog(name, breed, weight) {// constructor looks like a regular function, paramenters being the properties
                                   // property names and parameter names dont have to be the same, but they are by coders convention
  this.name = name;
  this.breed = breed;
  this.weight = weight;    // no explicit return needed
  this.bark = function() {
    if (this.weight > 25) {
      alert(this.name + "says Woof!");
    } else {
      alert(this.name + "says Yip!");// "this" is used to refer to the object we're calling on
    }
  };
}

var fido = new Dog("Fido", "Mixed", 38);// "new" operator for creating a new object while passing in new properties as arguements to the constructors parameters
fido.owner = "Bob";
delete fido.weight; // as with all objects, these can be altered after they are created, methods can also be added
fido.trust = function(person) {// annonymous function
  return (person === "Bob")
};
var notBite = fido.trust("Bob");// this variable only works in fido as the trust method is only defined in this object

var fluffy = new Dog("fluffy", "Poodle", 30);
var spot = new Dog("spot", "Chihuahua", 10);
var dogs = [fido, fluffy, spot];



for (var i = 0; i < dogs.length; i++) {
  dog[i].bark();
  var size = "small";
  if (dogs[i].weight > 10) {
    size = "large";
  }
  console.log("Dog: " + dogs[i].name + " is a" + dogs[i].breed);
}
