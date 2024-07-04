/* 
use find()  -> There are two ways you can use this method
use indexOf() -> To find index of elements
*/

myArr = [1,2,3,4,5,6,7,8,9];

//method1
let findValue = myArr.find(function(e) {return e === 6});
console.log(findValue); // 6

//method2
let findValue2 = myArr.find(e => e === 10);
console.log(findValue2); //undefined

//Lets find index of elements

let findIndex =  myArr.indexOf(3);
console.log(findIndex); //2