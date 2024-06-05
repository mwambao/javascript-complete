//we use typeof operator to check the type of a variable

let str = "Hello";
console.log("str is :", typeof str); // str is : string

let nr = 7;
console.log("nr is :", typeof nr); // nr is : number

let bigNr = 12345678901234n; 
console.log("big is :", typeof bigNr); // big is : bigint

let bool = true;
console.log("bool is :", typeof bool); // bool is : boolean

let sym = Symbol("xyz");
console.log("sym is :", typeof sym); // sym is : symbol