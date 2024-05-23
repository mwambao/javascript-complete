/* When you are writing code, often a line of code belongs to a certain code block (code
between two curly brackets { like this }) or parent statement. If that is the case,
you give the code in that block one indentation to make sure that you can see easily
what is part of the block and when a new block starts. */


let status="new";
let scared= true;

if (status === "new") {
    console.log("Welcome to Javascript!");
    if (scared) {
        console.log("Don't worry you will be fine!");
    } else {
        console.log("You are brave! You are going to do great things!");
    }
} else {
    console.log("Welcome back, I knew you'd like it!");
}
