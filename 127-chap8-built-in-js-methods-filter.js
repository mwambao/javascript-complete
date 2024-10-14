/*
The filter() method in JavaScript creates a new array with all elements that pass the test implemented by the provided function. It's a useful method for extracting a subset of an array based on certain conditions.
*/

// Initialize an array with mixed data types
let myArray = ["squirel", 5, "Duncan", new Date(), true];

// Function to check if the array element is of type 'string'
// The function returns true if the element is a string, otherwise false
function checkString(element, index) {
    return typeof element === "string";  // Checks if the current element is a string
}

// Use the filter method to create a new array containing only string elements
let filterArray = myArray.filter(checkString);

// Log the filtered array to the console (will only contain string elements)
console.log(filterArray); // Output: [ 'squirel', 'Duncan' ]
