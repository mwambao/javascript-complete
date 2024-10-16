/*
isFinite() -> we use it to check if something is finite
*/
let x = 3;
let str = "finite";

console.log(isFinite(x)); // true
console.log(isFinite(str)); // false
console.log(isFinite(Infinity)) // false
console.log(isFinite(10/0)) // false - because 10/0 is infinity