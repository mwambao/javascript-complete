

function myCalculator (num1, num2, operation) {
    if (operation === "+" ) {
        return num1 + num2;
    } 
    else if ( operation === "-") {
        return num1 - num2;

    }
    else {
        return num1 + num2;
    }
}


console.log(myCalculator(82,3,"+")); // 85
console.log(myCalculator(82,3,"-")); //79
console.log(myCalculator(82,3)); // 85