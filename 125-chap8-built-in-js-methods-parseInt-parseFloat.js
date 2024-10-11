/*
In many situations you will have
to translate a string to a number, for example reading input boxes from an HTML web
page. You cannot calculate with strings, but you can with numbers. Depending on
what exactly you need to do, you will need either one of these methods.
- parseInt parses a string to intenger. 
- parseFloat whenever you have values or integres

*/


let str_int = "6";
let int_int = parseInt(str_int);

console.log("Type of ", int_int, " is ", typeof int_int); // Type of  6  is  number