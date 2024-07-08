/*

    operand1 ? operand2 : operand3;

operand1 is the expression that is to be evaluated. If the value of the expression is true, operand2 gets executed. If the value of the expression is false, operand3 gets executed. You can read the question mark as "then" and the colon as "else" here:

    expression ? statement for true : statement associated with false;

The template for saying it in your head should be:

    if *operand1*, then *operand2*, else *operand3*

You can only use these ternary operators for very short actions, so it's best practice to use the ternary operator in these instances as it makes code easier to read. However, if the logic contains multiple comparison arguments, you'll have to use the regular if-else.

*/

let age = 20;

//(age < 18) ? console.log("Denied Access") : console.log ("Allowed Access"); //Allowed Access. This will do the same note the bracket in operand1
age < 18 ? console.log("Denied Access") : console.log ("Allowed Access"); //Allowed Access