/*
do {
    //code to be executed if the condition is true
} while (condition);
*/

let number;
do {
    number = prompt("please enter a number between 0 and 100: ");
} while (!(number >= 0 && number < 100));