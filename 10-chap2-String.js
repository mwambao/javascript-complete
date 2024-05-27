/*  3 ways to declare a string: 
- double quotes "" 
- single quotes '', and 
- backticks ``: - special template strings in which you can use variables directly
*/

let myString = 'This is a string';
console.log(myString);

let myOtherString = "This is another string";
console.log(myOtherString);

//Lets now use backticks to declare a string

let language= 'JavaScript';
let message = `Let's learn ${language}`

console.log(message); //This will print Let's learn JavaScript