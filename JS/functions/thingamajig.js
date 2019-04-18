function clunk(times) {
  var num = times;
  while (num > 0) {
    display("clunk");
    num = num - 1;
  }
}

function thingamajig(size) {
  var facky = 1;
  clunkCounter = 0;
  if (size == 0) {
    display("clank");
  } else {
    while (size > 1) {
      facky = facky * size;
      size = size - 1;
    }
    clunk(facky);
  }
}

function display(output) {
  console.log(output);
  clunkCounter = clunkCounter + 1;
}

var clunkcounter = 0;
thingamajig(5);
console.log(clunkCounter);
