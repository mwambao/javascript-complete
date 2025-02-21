
/*
async / await -> async: Async make a function return a promise. This makes a promise nicer to read and look alot like synchronous(non-concurrent) code.
                 await: await makes a function wait for a promise. Await only works in asynchronous function.
*/

// ------ async--------
// Define an asynchronous function using the `async` keyword
async function hello() {
    // The function returns a string, but since it's async, 
    // JavaScript automatically wraps it in a Promise.
    return "Hello world!";
}

// Call the `hello` function, which returns a Promise.
// Use `.then()` to handle the resolved value and log it to the console.
hello().then(console.log); // Output: Hello world!


// ------ await--------
// Define another asynchronous function `greet`
async function greet() {
    // Use `await` to pause execution until the `hello` function resolves.
    let message = await hello();

    // Log the resolved value of `hello()` to the console.
    console.log(message); // Output: Hello world!
}

// Call the `greet` function, which uses `await` to handle the async function
greet();
