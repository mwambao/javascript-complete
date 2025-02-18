
/*
callbacks -> A function taking another function as an argument which then gets called when the rest of the initial function has finished. In other words it is just a function calling a function.
*/


function doSomething(callback){
    callback();
}

function sayHi() {
    console.log("Hello everyone!");
}

doSomething(sayHi);

/*
- Callbacks become really valuable in an asynchronous context, for example, when one function is still waiting for the results of the a call to the database before calling the callback function that is going to process the data.
- JS built in functions work with this callback principle e.g. setTimeout() and setInterval() functions.
- callbacks are a great concept but they can create ugly code very fast. There is often a better solution -> promise.
*/