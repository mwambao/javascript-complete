/*
Similar to the spread operator, we have the rest parameter. It has the same symbol as
the spread operator, but it is used inside the function parameter list. 
*/

//Remember what would happen if we were to send an argument too many times, as here:

function someFunction(param1, param2) {
    console.log(param1, param2);
}
someFunction("Hi", "there!", "How are you?") // Hi there!

//You see it has just pretended we only sent in two arguments and log hi there!.


//Now lets fix the above by using rest parameter ...param2
//there!. If we use the rest parameter, it allows us to send in any number of arguments and translate them into a parameter array
function someFunction(param1, ...param2) {
    console.log(param1, param2);
}
someFunction("Hi", "there!", "How are you?")  // Hi [ 'there!', 'How are you?' ]

/*
As you can see, the second parameter has changed into an array, containing our second and third arguments. 
This can be useful whenever you are not sure what number of arguments you will get. 
Using the rest parameter allows you to process this variable number of arguments, for example, using a loop.
*/