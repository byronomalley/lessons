var ramdomLoc = Math.floor(Math.random() * 5); // Math.random returns random number -- * 5 ensures the numbers are between 0 - 6 -- Math.floor always rounds DOWN to the nearest integer value
var location1 = ramdomLoc;                     // Math.random creates vaule between 0 - 1 -- max= 0.999 -- * 5 = 4.999
var location2 = location1 + 1;                 // Parentheses are used to call a function
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var yes = "yes";

while (isSunk == false) {
  guess = prompt("Ready, aim, FIRE! (enter a number between 0-6):");
  if (guess < 0 || guess > 6) {
    alert("Dont fuck about, this is WAR dammit!!");
  } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits = hits + 1;
      alert("GOTTEM!!");
      if (hits == 3) {
        isSunk = true;
        alert("you fukn dunnit man!");
      }
    } else {
        alert("you fuckin missed boi,,,");
    }
  }
}

var stats = "you took " + guesses + " missiles out of the hull, " + "which means your accuracy was " + (3/guesses);
alert(stats);

prompt("Is that another one? (yes or no)");
  if () {
    isSunk == false  // !!!!!!!!  REMATCH OPTION   !!!!!!!!!!!!
  }
