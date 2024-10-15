/* 
If you need to replace part of a string you use replace(old, new) method.
It takes two arguments, one string to look for in the string and one new
value to replace the old value with.
*/

let hi = "Hi buddy";
let new_hi = hi.replace("buddy", "Duncan");

console.log(new_hi); // Hi Duncan


let s3 = "hello hello";
let new_s3 = s3.replaceAll("hello", "sasa"); // replace all instances of 'hello' with 'sasa'

console.log(new_s3); //sasa sasa