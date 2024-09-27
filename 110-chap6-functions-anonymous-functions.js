/*
We can also create functions without names if we store them inside variables. We call these functions anonymous. Here is
a non-anonymous function.

We will have to store it in a variable in order to call the anonymous function; we can store it like below.
*/

let functionVariable = function () {
    console.log("Not so secret though.")
};


//now lets call the anonymous function. Anonymous functions are called using variable name:

functionVariable(); // Not so secret though.

/*
This might seem a bit useless, but it is a very powerful JavaScript construct. 
Storing functions inside variables enables us to do very cool things, like passing in functions as parameters. 
This concept adds another abstract layer to coding. This concept is called callbacks, and we will discuss it in the next section.
*/