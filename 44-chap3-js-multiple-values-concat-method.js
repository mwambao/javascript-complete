//we will use concat method to add elements to an array
let arr5 = [1,2,3];
let arr6 = [4,5,6];
let arr7 = arr5.concat(arr6);

console.log(arr7); //[ 1, 2, 3, 4, 5, 6 ]

//another way to add elements using concat. 

let arr8 = arr7.concat(7,8,9,10);
console.log(arr8); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
