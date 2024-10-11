/*
We have seen many built-in JavaScript methods already. Any method that we didn't
define ourselves is a built-in method. Some examples include console.log(), Math.
random(), prompt(), and many more—think about methods on arrays for example.
The difference between a method and a function is that a function is defined
anywhere in the script, and a method is defined inside a class. So methods are pretty
much functions on classes and instances.
*/

let s = "Hello"; //we store a value in variable s

console.log( 
    s.concat(" there!") // now the word becomes ->  "Hello there!"
    .toUpperCase() //  we change to upercase -> "HELLO THERE!"
    .replace("THERE", "you") // we replace THERE with you -> "HELLO you!""
    .concat(" you're amazing!")// we add 'you're amazing' so it becomes -> HELLO you! you're amazing!
);

//HELLO you! you're amazing!