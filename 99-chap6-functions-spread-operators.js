/*
The spread operator (...) in JavaScript is a useful tool that allows you to spread elements from an iterable (like an array or object) into individual elements.
The spread operator (...) allows you to unpack elements from an array, object, or other iterables, where multiple values are expected.
*/

//EXAMPLE

let arr1 = ["so", "much", "fun"];
let message = ["Javascript", "is", ...arr1, "and", "very", "powerful"];

console.log(message); // [ 'Javascript', 'is', 'so', 'much', 'fun', 'and', 'very', 'powerful' ]

//example

function addTwoNumbers(x,y){
    console.log(x + y);
}

let arr = [5,9];
addTwoNumbers(...arr); // 14

