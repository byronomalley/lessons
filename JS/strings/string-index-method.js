var phrase = "the cat in the hat";

var index = phrase.indexOf("cat");
console.log("there is a cat sitting at index " + index);// goal is to find the first occurence of cat 

index = phrase.indexOf("the, 5");
console.log("there is a the sitting at index " + index);// the second arguement is the starting index for search

index = phrase.indexOf("dog");
console.log("there is a the sitting at index " + index); // if string isnt found, result is -1
