var items = new Array();
var items = []; // these two expressions do the same thing, [] is a shorthand for using the array constuctor directly

var items = ["a", "b", "c"];// literal syntax
var items = new Array("a", "b", "c");

var n = getNumberOfWidgetsFromDatabase();
var widgets = new Array(n);
for (var i = 0; i < n; i++) {
  widgets[i] = getDatabaseRecord[i];
}
