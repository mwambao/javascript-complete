// Initialize the first two Fibonacci numbers
let nr1 = 0;
let nr2 = 1;

// Temporary variable to hold the sum of the last two Fibonacci numbers
let temp;

// Array to store the Fibonacci sequence
let myFibonacciSequence = [];

// Loop until the Fibonacci sequence array contains 25 elements
while (myFibonacciSequence.length < 25) {
    // Add the current Fibonacci number to the sequence
    myFibonacciSequence.push(nr1);
    // Calculate the next Fibonacci number
    temp = nr2 + nr1;
    // Update nr1 to be the next number in the sequence
    nr1 = nr2;
    // Update nr2 to be the new calculated number
    nr2 = temp;
}

// Output the complete Fibonacci sequence
console.log(myFibonacciSequence);


