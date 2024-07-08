/*
Practice exercise 4.4
JavaScript function Math.random() will return a random number in the range of 0 to less than 1, including 0 but not 1. You can then scale it to the desired range by multiplying the result and using Math.floor() to round it down to the nearest whole number; for example, to generate a random number between 0 and 9: 

// random number between 0 and 1
let randomNumber = Math.random();

// multiply by 10 to obtain a number between 0 and 10
randomNumber = randomNumber * 10;

// removes digits past decimal place to provide a whole number
RandomNumber = Math.floor(randomNumber);


In this exercise, we'll create a Magic 8-Ball random answer generator:

1. Start by setting a variable that gets a random value assigned to it. The value is assigned by generating a random number 0-5, for 6 possible results. You can increase this number as you add more results.
2. Create a prompt that can get a string value input from a user that you can repeat back in the final output.
3. Create 6 responses using the switch statement, each assigned to a different value from the random number generator.
4. Create a variable to hold the end response, which should be a sentence printed for the user. You can assign different string values for each case, assigning new values depending on the results from the random value.
5. Output the user's original question, plus the randomly selected case response, to the console after the user enters their question.

*/

//generate randon number
let randomNumber = Math.random();

//limit the range of random number between 0 and 5
randomNumber = randomNumber * 5;

//remove digits past decimal point to give a whole number
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);

switch(randomNumber) {
    case 0:
        console.log("You have ZERO generated");
        break;
    case 1:
        console.log("You have ONE generated");
        break;
    case 2:
        console.log("You have TWO generated");
        break;
    case 3:
        console.log("You have THREE generated");
        break;
    case 4:
        console.log("You have FOUR generated");
        break;
    case 5:
        console.log("You have FIVE generated");
        break;
    default:
        console.log("No number generated");
        break;
}