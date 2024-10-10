

let s = "Hello"; //we store a value in variable s

console.log( 
    s.concat(" there!") // now the word becomes ->  "Hello there!"
    .toUpperCase() //  we change to upercase -> "HELLO THERE!"
    .replace("THERE", "you") // we replace THERE with you -> "HELLO you!""
    .concat(" you're amazing!")// we add 'you're amazing' so it becomes -> HELLO you! you're amazing!
);

//HELLO you! you're amazing!