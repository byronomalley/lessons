// GET ELEMENT BY ID, THEN GET ELEMENT BY TAG NAME
var x = document.getElementById("main");
var y = x.getElementsByTagName("p");

// GET ELEMENT BY CLASS NAME
var x = document.getElementsByClassName("intro");
// doesnt work for IE 8 or earlier.......

// GET ELEMENT BY CSS SECLECTORS
var x = document.querySelectorAll("p.intro");
// doesnt work for IE 8 or earlier.......

// GET ELEMENTS BY HTML OBJECT COLLECTIONS
var x = document.forms["frm1"];
var text = "";
var i;
for (i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;
// this is a collection of all a form's values

// WRITE INTO THE DOCUMENT DIRECTLY
document.write(Date());
// writes the date
// never use this after the document has loaded, this will overwrite the page

// CHANGE CONTENT WITHIN AN ELEMENT
document.getElementById("p1").innerHTML = "New text!";

// CHANGE ATTRIBUTE OF AN ELEMENT
document.getElementById("myImage").src = "landscape.jpg";
