String.prototype.cliche = function() {// built in objects like prototypes are adjustable with caution
  var cliche = ["lock and load","touch base", "open the kimono"];// we are extending "String" prototype with a method,"cliche"

  for (var i = 0; i < clich.length; i++) {
    var index = this.indexOf(cliche[i]);// this is the string which uses the method cliche
    if(index >= 0) {
      return true;
    }
  }
  return false;
};
// WORD OF WARNING - make sure names of method extensions of built in objects dont conflict with other names - SOME BUILT IN OBJECTS AREN'T DESIGNED FOR EXTENTION
var sentences = ["I'll send my car around to pick you up.", "Let's touch base in the morning and see where we are","We don't want to open the kimono, we just want to inform them."];

for (var i = 0; i < sentences.length; i++) {
  var phrase = sentences[i];
  if (phrase.cliche()) {
    console.log("CLICHE ALERT: " + phrase);
  }
};
