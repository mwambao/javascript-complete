//lets use for loop to push elements into an array

let myArray1 = [];

for (let i=1; i<10 ; i++){
    myArray1.push(i);
}

console.log(myArray1); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

//lets now push even elements into an array using a for loop

let myArray2 = [];

for (let i=0; i < 10; i = i + 2){
    myArray2.push(i);
}

console.log(myArray2); //[ 0, 2, 4, 6, 8 ]