/* 
Practice exercise 3.3
1. Create an array containing three values: 1, 2, and 3.
2. Nest the original array into a new array three times.
3. Output the value 2 from one of the arrays into the console.
*/

let myOrigArray = [1, 2, 3];
let myNewArray = [myOrigArray, myOrigArray, myOrigArray]
console.log(myNewArray); // [ [ 1, 2, 3 ], [ 1, 2, 3 ], [ 1, 2, 3 ] ]

//output value of two from the first array in the 2d array.
console.log(myNewArray[0][1]); //2