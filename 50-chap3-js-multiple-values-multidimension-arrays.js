let someValues1 = [1,2,3];
let somevalues2 = [3,4,5];
let somevalues3 = [7,8,9];

//a multidimensional array i.e. an array of arrays. Also called two dimensional array
let arrOfArrays = [someValues1, somevalues2, somevalues3]; 

console.log(arrOfArrays); //[ [ 1, 2, 3 ], [ 3, 4, 5 ], [ 7, 8, 9 ] ]

/* To grab an element from this array lets say we want 8, 
    2->  index of the 3rd array in the multidimensional array, 
    1-> the index of 8 in this 3rd array
*/

console.log(arrOfArrays[2][1]); // 8
