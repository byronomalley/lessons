function hide(e, reflow) {
  if(reflow) {//  if the second arguement is true we hide the element and use its space
    e.style.display = "none"
  }
  else {// otherwise we make e invisible and leave its space
    e.style.visbility = "hidden";
  }
}

function highlight(e) {// highlight e by setting a css class, define or append to the html class attribute.
  if(!e.className) e.className = "hilite";// this assumes that a css stylesheet already defines the "hilite" class
  else e.className += " hilite";
}

/*    jhuygtfikyhulijlo */
