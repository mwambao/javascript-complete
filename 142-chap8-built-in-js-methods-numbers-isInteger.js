/* 
isInteger() --> check if something is an integer 
it hasn't been made global so we have to use Number object to use it
*/

let x = 3;
let str = "integer";

console.log(Number.isInteger(x)); // true
console.log(Number.isInteger(str)); // false
console.log(Number.isInteger(2.4)); // false