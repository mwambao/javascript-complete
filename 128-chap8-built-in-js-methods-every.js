/*
every() method checks to see whether something is true for all elements in the array
*/

// Initialize an array with mixed data types
let myArray = ["squirel", 5, "Duncan", new Date(), true];

function checkString(element, index) {
    return typeof element === "string";  // Checks if the current element is a string
}

console.log(myArray.every(checkString)) // false