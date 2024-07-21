/*
Practice exercise 5.2
In this exercise, we will create a basic counter that will increase a dynamic variable
by a consistent step value, up to an upper limit.
1. Set the starting counter to 0
2. Create a variable, step, to increase your counter by
3. Add a do while loop, printing the counter to the console and incrementing it
by the step amount each loop
4. Continue to loop until the counter is equal to 100 or less than 100
*/

// Initialize the counter to start from 0
let counter = 0;

// Define the step value to increase the counter by 5 each time
let step = 5;

// Start a do-while loop that will run at least once
do {
    // Print the current value of the counter to the console
    console.log(counter);
    
    // Increment the counter by the step value
    counter = counter + step;
    
// Continue looping as long as the counter is less than or equal to 100
} while (counter <= 100);