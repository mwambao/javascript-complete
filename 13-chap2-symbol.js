//Here JavaScript concludes that the strings are the same. They have the same value, and the same type.
let str1 = "Javascript is fun!";
let str2 = "Javascript is fun!";

console.log("These two strings are the same:", str1 === str2); //This will print 'These two strings are the same: true'


//Symbol can be used when it is important that variables are not equal, even though their value and type are the same (in this case, they would both be of the symbol type).
//However, in this second part, each symbol is unique. Therefore, although they contain the same string, they are not the same, and output false when compared.
let sym1 = Symbol("Javascript is fun!");
let sym2 = Symbol("Javascript is fun!");
console.log("These two symbols are the same:", sym1 === sym2); //This will print 'These two symbols are the same: false'

//These symbol data types can be very handy as properties of objects, which we will see in Chapter 3, JavaScript Multiple Values.