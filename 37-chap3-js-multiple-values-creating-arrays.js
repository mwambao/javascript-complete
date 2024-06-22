//In JS an array can contain different data types. 
//array declared with [] brackets.

arr1 = ["black", "orange", "red"]; //an array of three strings
console.log(arr1); // [ 'black', 'orange', 'red' ]

arr2 = [10]; //an array of one string
console.log(arr2); // [10]

//Js won't convert the data types. each one will store its data type. See example below of a string and number data types.
let arr3 = ["My name is Duncan", 30, false];

console.log(typeof arr3[0]); // string
console.log(typeof arr3[1]); // number
console.log(typeof arr3[2]); // boolean

console.log(arr3[0]); // My name is Duncan
console.log(arr3[1]); //30
console.log(arr3[2]); //true

//if you define an array using 'const', you can change values pf a constant array, but you cannot change the array itself. see below:

const arr4 = ["Hi there"];
arr4[0] = ["Mambo vipi"];
console.log(arr4[0]); // ['Mambo vipi']

//But below will yield a type error:
arr4 = ["I am trying to overwrite the array"] //TypeError: Assignment to constant variable.
