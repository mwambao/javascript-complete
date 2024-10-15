//split() method converts a string to an array

let result = "Hello JavaScript";
let arr_result = result.split(" "); // split by space

console.log(arr_result); // [ 'Hello', 'JavaScript' ]

//another example

let fruits = "strawberry, kiwi, grapefruit, avocado";
let arr_fruits = fruits.split(","); // split anywhere there is ,

console.log(arr_fruits); // [ 'strawberry', ' kiwi', ' grapefruit', ' avocado' ]