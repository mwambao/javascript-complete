
/*
round() -> rounds numbers
ceil() -> The ceil() method is always rounding up to the first integer it encounters.
floor() -> The floor() method is doing the exact opposite of the ceil() method. It rounds down to the nearest integer number
trunc() -> This gives the exact same result as floor() for positive numbers, but it gets to these results differently. It is not rounding down, it is
simply only returning the integer part.
*/
let x = 6.78

console.log(Math.round(x)); // 7
console.log(Math.ceil(x)); //7
console.log(Math.floor(x)); //6
console.log(Math.trunc(x)); //6
