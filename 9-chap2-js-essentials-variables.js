firstname = "Duncan"; // a variable firstname with value "Duncan"
x = 42; // a variable x with value 42

console.log(firstname); //This will print Duncan
console.log(x); //This will print 42

/* The first time you create a variable, you declare it. And you need a special word for that: let, var, or const.
The first time you create a variable, you declare it. And you need a special word for
that: let, var, or const. */

let nr1 = 12; //let has a block scope i.e. within { }.
var nr2 = 8; //var has a global scope i.e. within entired script.
const PI = 3.14159 

/* 
- var has global scope and let has block scope. 
- var's global scope means that you can use the variables defined with var in the entire script. 
On the other hand, let's block scope means you can only use variables defined with let in the  specific block of code in which they were defined. 
- Remember, a block of code will always start with { and end with }, which is how you can recognize them. 
- On the other hand, const is used for variables that only get a value assigned once— for example, the value of pi, which will not change. If you try reassigning a value declared with const, you will get an erro.
*/

const someConstant = 3;
//someConstant = 4; // This will throw an error 'TypeError: Assignment to constant variable'.
console.log(someConstant); // This will print 3.

//Primitive data types
/* JavaScript is a loosely typed language. This means that JavaScript determines the type based on the value. The
type does not need to be named explicitly. For example, if you declared a value of 5, JavaScript will automatically define it as a number type 

7 Primitive data types in JavaScript are:
- String
- Number
- BigInt
- Boolean
- Symbol
- undefined and
- null
*/

