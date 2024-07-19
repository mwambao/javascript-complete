/*

Practice exercise 5.1
In this exercise we will create a number guessing game that takes user input and
replies based on how accurate the user's guess was.

1. Create a variable to be used as the max value for the number guessing game.

2. Generate a random number for the solution using Math.random() and
Math.floor(). You will also need to add 1 so that the value is returned as
1-[whatever the set max value is]. You can log this value to the console for
development to see the value as you create the game, then when the game is
complete you can comment out this console output.

3. Create a variable that will be used for tracking whether the answer is correct
or not and set it to a default Boolean value of false. We can update it to be
true if the user guess is a match.

4. Use a while loop to iterate a prompt that asks the user to enter a number
between 1 and 5, and convert the response into a number in order to match
the data type of the random number.

5. Inside the while loop, check using a condition to see if the prompt value is
equal to the solution number. Apply logic such that if the number is correct,
you set the status to true and break out of the loop. Provide the player with
some feedback as to whether the guess was high or low, and initiate another
prompt until the user guesses correctly. In this way we use the loop to keep
asking until the solution is correct, and at that point we can stop the iteration
of the block of code.


*/

// Step 1: Create a variable to be used as the max value for the number guessing game.
let maxValue = 5;

// Step 2: Generate a random number for the solution using Math.random() and Math.floor().
// Adding 1 to ensure the value is between 1 and maxValue (inclusive).
let myRandomNum = Math.random() * maxValue;
myRandomNum = 1 + Math.floor(myRandomNum);
console.log(myRandomNum); // Log the random number for development purposes.

// Step 3: Create a variable for tracking whether the answer is correct, initially set to false.
let answerIsCorrect = false;
let userInputValue;

// Step 4: Use a while loop to keep asking the user for a number between 1 and 5 until the correct guess is made.
while (answerIsCorrect === false) {
    // Prompt the user to enter a number between 1 and 5.
    userInputValue = prompt("Enter a number between 1 and 5");
    // Convert the user input to a number to match the random number's data type.
    userInputValue = Number(userInputValue);

    // Step 5: Check if the user's guess is equal to the random number.
    if (userInputValue === myRandomNum) {
        // If the guess is correct, log a success message and set answerIsCorrect to true to exit the loop.
        console.log("Your guess is correct: " + userInputValue + ". Computer's guess is: " + myRandomNum);
        answerIsCorrect = true;
    } else {
        // If the guess is incorrect, log a message and continue the loop.
        console.log("Your guess is incorrect. Try again.");
        answerIsCorrect = false;
    }
}
