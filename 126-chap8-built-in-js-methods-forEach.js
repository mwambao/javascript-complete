/*
- The forEach() method in JavaScript is used to execute a provided function once for each array element. 
- It takes function to be executed as an argument.
*/


let myArray = ["Grapefruit", 4, "Hello", 5.6, true];

function printStuff(element, index){
    console.log("printing stuff:", element, "on array position", index);
}

//We just need to specify what function needs to be executed for every element.
myArray.forEach(printStuff);

/*
printing stuff: 4 on array position 1
printing stuff: Hello on array position 2
printing stuff: 5.6 on array position 3
printing stuff: true on array position 4
*/