/* the simplest way to do this is to use Boolean(), Number(), String() or Object() functions

these can be used as constructors for wrapper objects,
but when invoked without the "new" operator, they work as conversion functions and perform the conversions as summarized: */

Number("3") // 3
String(false) // "false" or false.toString()
Boolean([]) // true
Object(3)  // new Number(3)
