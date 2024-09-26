/*
global variables are variables declared outside a
function and not in some other code block. Variables are accessible in the scope
(either function or block) where they're defined, plus any "lower" scopes. So, a
variable defined outside of a function is available within the function as well as
inside any functions or other code blocks inside that function. A variable defined at
the top level of your program is therefore available everywhere in your program.
This concept is called a global variable.
*/

let globalVar = "Accessible everywhere!";
console.log("outside function", globalVar); // outside function Accessible everywhere!


function creatingNewScope(x) {
    console.log("Access to global vars insite function:", globalVar); // Access to global vars insite function: Accessible everywhere!
}

console.log(creatingNewScope("some parameter")); 

console.log("still available: ", globalVar); // still available:  Accessible everywhere!