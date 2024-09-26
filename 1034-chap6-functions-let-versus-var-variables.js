/*
The difference between let and var is that var is function-scoped.
let is actually not function-scoped but block-scoped. A block is defined by two curly braces { }. The code within those braces is where let is
still available.
*/

function doingStuff() {
    if (true) {
        var x = "local"; // var is function scoped.
    }
    console.log(x); // <-- This will print 'local'
}

doingStuff(); // local


function doingStuff(){
    if (true) {
        let x = "local"; // let is only block {} scoped.
    }
    console.log(x);    // <-- This will print 'ReferenceError: x is not defined'
}

doingStuff(); // ReferenceError: x is not defined
