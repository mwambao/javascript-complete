/*
In many situations you will have
to translate a string to a number, for example reading input boxes from an HTML web
page. You cannot calculate with strings, but you can with numbers. Depending on
what exactly you need to do, you will need either one of these methods.
- parseInt() parses a string to intenger. 
- parseFloat() whenever you have values or integers. You will work with this if you need decimal numbers.

*/

//parseInt()

let str_int = "6";
let int_int = parseInt(str_int);
console.log("Type of ", int_int, " is ", typeof int_int); // Type of  6  is  number


//parseFloat()
let str_float = "7.6";
let float_float = parseFloat(str_float);
console.log("Type of ", str_float , " is ", typeof float_float); // Type of  7.6  is  number


