/*
Arrow functions, provide a more concise syntax for writing functions in JavaScript. 
They are commonly used for callbacks or small functions and offer benefits like shorter syntax.

Syntax for arrow function:

const functionName = (parameter1, parameter2, ..., parameterN) => {
  // function body
};

- If there's only one parameter, parentheses can be omitted.
- If the function body has a single expression, you can omit the curly braces and the return keyword. The result of that expression is automatically returned.

*/


//arrow function without parameters

const greet = () => { 
    console.log('Hello!') 
};

greet() // Hello!

//arrow function with one parameter, paranthesis are optional in this case

let square = x => x * x ;
console.log(square(5)); //25


//arrow function with multiple parameters

let add = (a, b) => {
    return a + b;
};
console.log(add(3,4)); //7