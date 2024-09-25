
//we can tell a function to take default parameter values
function addTwoNumbers(x=2, y=3){
    console.log(x + y);
}

addTwoNumbers() //5 i.e. we are using default pameter values as arguments i.e. 2 + 3
addTwoNumbers(6,6)//12 i.e. here we are overriding the values of x and y to take 6 and 6
addTwoNumbers(10) // 13 i.e. x = 10 , y=3
addTwoNumbers(10,11,3,4) // 21, the other arguments 3 and 4 will be ignored