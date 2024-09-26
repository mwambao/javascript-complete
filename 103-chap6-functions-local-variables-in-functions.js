//variables defined inside the function are not available outside the function.

function testAvailability(x) {
    console.log("Available here:", x) //x is a local variable within the function
}

console.log(testAvailability("Hi!")); // Available here: Hi!

console.log("Not Available here:", x); // ReferenceError: x is not defined