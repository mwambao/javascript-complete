let nr1 = 2; //number
let nr2 = "3"; //string

console.log(nr1 + nr2); //This will print 23 i.e. concatenation happens.
console.log(nr1 * nr2); //This will print 6. JS unlike many other languages doesn't throws exception it converts the string to number.

/* conversion methods are:
- String()
- Number() and
- Boolean()
 */

let nrToString = 6;
nrToString = String(nrToString);
console.log("nrToString", typeof nrToString); 	//typeof shows it is a string.

let stringToNr = "7";
stringToNr = Number(stringToNr);
console.log("stringToNr", typeof stringToNr); 	//typeof shows it is a number.

let stringToBoolean = "any string value";
stringToBoolean = Boolean(stringToBoolean);
console.log("stringtoBoolean", typeof stringToBoolean); 	//typeof shows it is a boolean.



