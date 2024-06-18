//Or operator represented by two pipes '||'

let x = 1;
let y = 2;
let z = 3;

console.log(x < y || y < z); //true. This is because either of the conditions are satisfied.

console.log(x > y || y < z); //true. Because one the expression is  true

console.log(x > y || z < x); //false