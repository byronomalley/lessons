var s = "test";//string value
s.len = 4;//set a property on it
var t = s.len; //query the property

/* when you run this code, the value of t is undefined, the second line of code treats the temporary string onject, sets a len property to 4, and then discards that object
this means that primitives can behave like objects when you try to read the value of a property from them,
BUT if you attempt to set the value of that property, that attempt is ignored*/

// !!!!!!!!  CREATING WRAPPER OBJECTS EXPLICITLY !!!!!!!!!!! generally never neccecary
// done by invoking Sring(), Boolean() and Number() constructors
var s = "test", n = 1, b = true;
var S = new String(s);
var N = new Number(n);
var B new boolean(b);

/**/
