// DICTIONARY
// \w = [a-zA-Z0-9_]
// ? = the previous element is optional
// .../i = IGNORE CAPS
// .../g = GLOBAL, REPEATED MATCHES
// . = interchangable character substitute
// * = match if previous occurs 0 or more times
// ...+ = match if previous occurs 1 or more times
// ^... = first in the pattern
// ...$ = last in the pattern
// \s = match whitespace

//  TEST METHOD - LITERAL PATTERN
let myString = "Hello, World!";
let myRegex = /Hello|hello|HELLO/;
let result = myRegex.test(myString);
//  conditional test that runs true if the value fo myRegex is found.
//  the OR operator allows for multiple patterns to be included in the test


///  FLAGS ///

// "i" = IGNORE CAPS
let myString = "freeCodeCamp";
let fccRegex = /FREECODECAMP/i;
let result = fccRegex.test(myString);
// in some cases you might want to ignore case

//"g" = GLOBAL, REPEATED MATCHES
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /TWINKLE/gi;
let result = twinkleStar.match(starRegex);
// flags can be added together
//END FLAGS

// "." = WILDCARD, DOT, PERIOD
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]
// the period acts as a placeholder for a character that completes the match


/// MATCH METHOD - EXTRACTING ///
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match("coding");
// sometimes you'll want to extract a match


/// CHARACTER CLASSES ///
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);
// usefull if you want to be flexible but also specific

// CHARACTER SHORTHAND = [a-u] will match all letters in between
// NUMBERS = [h-z0-9]
// NEGATED CHARACTER SETS - to specify what will not match = /[^aeiou^0-99]/ not a vowel or a number

// MATCH CHARACTERS OCCURING == || > 1 TIMES - "+"
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
// this will output ["aa", "aa"];

// MATCH CHARACTERS OCCURING == || > 0 TIMES - "*"
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);
// * this is the Asterisk operator

// LAZY MATCHING
let text = "titanic";
let myRegex = /t[a-z]*?i/;
let result = text.match(myRegex);
// regex's are greedy by default
// lazy matching will return "ti"
// greedy matching will return "titani"

// GREEDY MATCHING
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals = /C+/;
let matchedCriminals = crowd.match(reCriminals);
// returns a string with all consecutive "C"s

// FINDING THE FIRST PATTERN - with the caret "^"
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;// returns true if "Cal" is the first pattern in the string
let result = calRegex.test(rickyAndCal);

// FINDING THE LAST PATTERN - with "$"
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let calRegex = /^Cal/;// returns true if "caboos" is the last pattern in the string
let result = lastRegex.test(caboose);

// MATCHING ALL LETTERS AND NUMBERS - with "\w"
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi;
let result = quoteSample.match(alphabetRegexV2).length;
// "\w" is a shorthand character class for [A-Za-z0-9_]
// it matches numbers and is case insensitive

// MATCH EVERYTHING BUT LETTERS AND NUMBERS - with "\W"
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi;
let result = quoteSample.match(nonAlphabetRegex).length;
// "\W" is a shorthand character class for [^A-Za-z0-9_]

// MATCH NUMBERS ONLY - with "\d"
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g;// shorthand for character class [0-9]
let result = numString.match(numRegex).length;

// MATCH ALL NON-NUMBERS - with "\D"
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g;// shorthand for character class [^0-9]
let result = numString.match(noNumRegex).length;

// RESTRICT POSSIBLE USER NAMES
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i;
let result = userCheck.test(username);
// Three Rules:
// numbers can only be at the end of the string = ..\d*$.. (numbers)(occurring zero or more times)(at the end of the pattern)
// username letters are case-insensitive = ../i
// username has to be at least two characters long = ..{2,}.. (an array of two characters)
// alphabetical characters must be at the start of the pattern = ^[a-z]...

// MATCHING WHITESPACE, CARRIAGE RETURN, TAB, FORM FEED - with \s
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
// shorthand for character class of [\r\t\f\n\v]

// MATCHING NON-WHITESPACE CHARACTERS ect - with "\S"
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);
// shorthand for character class of ^[\r\t\f\n\v]

// SPECIFY UPPER & LOWER MATCHES = quantity specifiers "{}"
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
// specify two numbers within the curly braces for conditional pattern recognition

// SPECIFY ONLY THE NUMBER OF MATCHES = quantity specifiers "{}" with only on value and a comma
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;// quantity specifier
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true

// SPECIFY EXACT NUMBER OF MATCHES = quantity specifiers "{}" with just the value
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4); // Returns false
multipleHA.test(A3); // Returns true
multipleHA.test(A100); // Returns false

// CHECK ALL OR NONE - "?"
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true
// check for the possible existence of an element
// "?" = the previous element is optional

// POSITIVE AND NEGATIVE LOOKAHEAD
// patterns that tell JS to look ahead for patterns further along the string
// positive lookahead = (?=pattern) = checks to see if its there but wont match it, the rest of the pattern is returned if this condition is true
// negative lookahead = (?!pattern) = checks to see if its not there, the rest of the pattern is returned if this condition is true
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true
// Positive lookahead conditions:
//  - between 3 and 6 members of character class [a-zA-Z0-9_]
//  - at least one number
let quit = "qu";// another example
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]

// REUSE PATTERNS AND CAPTURE GROUPS - "()" capture group
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
// put the regex of the pattern that will repeat in between "()"
// specify where this repeat will appear with "\number of repeats"

// USE CAPTURE GROUPS TO SEARCH AND REPLACE - changes the text you match
let huhText = "This sandwich is good.";
let fixRegex = /good/;
let replaceText = "okey-dokey";
let result = huhText.replace(fixRegex, replaceText);
//another example
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."

// REMOVE WHITESPACE FROM START TO END
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, "");
