// Function to prompt the user for their name and greet them
function sayHello() {
    // Prompt the user to enter their name and store it in the variable 'you'
    let you = prompt("What's your name? ");
    
    // Log a greeting message in the console, including the user's name
    console.log("Hello, " + you + " !");
}

// Call the sayHello function to execute the greeting process
sayHello();


/* 
- HOW TO NAME FUNCTIONS - 

• Use camelCase for your functions: this means that the first word starts with a
lowercase letter and new words start with a capital. That makes it a lot easier
to read and keeps your code consistent.

• Make sure that the name describes what the function is doing: it's better to
call a number addition function addNumbers than myFunc.


• Use a verb to describe what the function is doing: make it an action. So
instead of hiThere, call it sayHi.

*/