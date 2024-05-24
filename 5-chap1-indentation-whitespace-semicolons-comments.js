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

/* SEMICOLONS: After every statement, you should insert a semicolon. JavaScript is very forgiving
and will understand many situations in which you have forgotten one, but develop
the habit of adding one after every line of code early. When you declare a code block,
such as an if statement or loop, you should not end with a semicolon. It is only for
the separate statements. */

//This is a single-line comment.

/* This is a multiline 
comment*/