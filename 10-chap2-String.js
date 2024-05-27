/*  3 ways to declare a string: 
- double quotes "" 
- single quotes '', and 
- backticks ``: - special template strings in which you can use variables directly
*/

let myString = 'This is a string';
console.log(myString);

let myOtherString = "This is another string";
console.log(myOtherString);



let language= 'JavaScript';

//Lets now use backticks to declare a string
let message = `Let's learn ${language}`

console.log(message); //This will print Let's learn JavaScript


//Escaping characters
//The backslash can be used to ensure your interpreter doesn't see the single or double quote mark and end either string too early. single or double quote marks and end either string too early:
let str = "Hello, what's your name? Is it \"Mike\" ?";
console.log(str); //This will print Hello, what's your name? Is it "Mike" ?"

let str2 = 'Hello, what\'s your name? Is it "Mike" ?';
console.log(str2);//this will print Hello, what's your name? Is it "Mike" ?"

/*
As you can see, both types of quote marks inside the strings have been logged without throwing an error. This is because the backslash before the quote character gives the quote character a different meaning. In this case, the meaning is that it should be a literal character instead of an indicator to end the string.
*/


//The escape character has even more purposes. You can use it to create a line break with \n, or to include a backslash character in the text with \\:
let str3 = "New \nline";
let str4 = "I am containing a backslash \\!";
console.log(str3); //this will print New and then line on the next line
console.log(str4); //This will print "I am containing a backslash \\!"


