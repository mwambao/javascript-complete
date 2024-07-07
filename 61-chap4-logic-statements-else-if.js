let age = 10;

if (age < 3){
    console.log("Access is free under three");
} else if (age < 12) {
    console.log("With the child discount, the fee is 5 Euros"); //This will be executed. The first condition to be true, its block will be executed, the rest will be ignored
} else if (age < 65) {
    console.log("A regulr ticket costs 10 Euros");
} else if (age >= 65 ) {
    console.log("A ticket is 7 Euros");
}