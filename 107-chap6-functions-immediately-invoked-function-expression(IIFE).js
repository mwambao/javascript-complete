/*
The immediately invoked function expression (IIFE) is a way of expressing a
function so that it gets invoked immediately. It is anonymous, it doesn't have a
name, and it is self-executing.
This can be useful when you want to initialize something using this function. It is
also used in many design patterns, for example, to create private and public variables
and functions.

This has to do with where functions and variables are accessible from. If you have an
IIFE in the top-level scope, whatever is in there is not accessible from outside even
though it is top level.

The function itself is surrounded by parentheses, which makes it create a function
instance. Without these parentheses around it, it would throw an error because our
function does not have a name (this is worked around by assigning the function to a
variable, though, where the output can be returned to the variable).
(); executes the unnamed function—this must be done immediately following a
function declaration. If your function were to require a parameter, you would pass it
in within these final brackets.

*/

(function (){
    console.log("IIFE!"); // IIFE!
})();

