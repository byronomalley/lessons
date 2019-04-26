// GETTER = access properties
// functions are meant to simply return (get) the value of an object's
// private variable to the user without the user directly accessing the private
// variable.
//
// SETTER = change properties
// functions are meant to modify (set) the value of an object's private
// variable based on the value passed into the setter function. This change could
// involve calculations, or even overwriting the previous value completely.

// VERSION ONE
const person = {
  firstName: 'Dave',
  lastName: 'Willy'
};

console.log(person.firsName + ' ' + ) // CONCATENATION
console.log(`${person.firstName} ${person.lastName}`); // TEMPLATE LITERAL

// VERSION TWO
const person = {
  firstName: 'Dave',
  lastName: 'Willy',
  fullName() {
    return `${person.firstName} ${person.lastName}`
  }
};
person.fullName = 'Hillary Duff'; // this wont work because we cant change it from the outside
console.log(person.fullName());// this is read only

// VERSION THREE
const person = {
  firstName: 'Dave',
  lastName: 'Willy',
  get fullName() {
    return `${person.firstName} ${person.lastName}`
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = part[1];
  }
};

person.fullName = 'Hillary Duff';
console.log(person.fullName());
