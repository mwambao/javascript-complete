

//anonymous function

let functionVariable = function () {
    console.log("Not so secret though.")
};

//lets pass a function as an argument to another function

function doFlexibleStuff(executeStuff){
    executeStuff();
    console.log("Inside doFlexibleStuff Function");
}

//lets now call this new function with our previous anonymous functio as an argument
doFlexibleStuff(functionVariable);

/*
Not so secret though.
Inside doFlexibleStuff Function
*/


//we can also call the function using another function then our function doFlexibleStuff will execute this other function. This is cool!

let anotherFunctionVariable = function() {
    console.log("Another anonymous function implementation");
}


doFlexibleStuff(anotherFunctionVariable);

/*
Another anonymous function implementation
Inside doFlexibleStuff Function
*/