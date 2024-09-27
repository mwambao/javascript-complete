/*
Just as with loops, if statements, and actually all other building blocks, we can have
functions inside functions. This phenomenon is called nested functions
*/

function doOuterFunctionStuff(nr) {
    console.log("outer function");
    doInnerFunctionStuff(nr)
    function doInnerFunctionStuff(x) {
        console.log(x + 7);
        console.log("I can access outer variables:", nr);
    }
}

doOuterFunctionStuff(2);

/*
outer function
9
I can access outer variables: 2
*/
