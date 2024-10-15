/*
The map() method in JavaScript is a built-in array function used to create a new array by applying a function to each element of an existing array. It is commonly used for transforming or modifying data in arrays.
*/

// Initialize an array with numbers
let myArray = [1, 2, 3, 4];

// Use the map() method to create a new array by adding 1 to each element
let mappedArray = myArray.map(x => x + 1);

// Log the new array to the console
console.log(mappedArray); // Output: [ 2, 3, 4, 5 ]
