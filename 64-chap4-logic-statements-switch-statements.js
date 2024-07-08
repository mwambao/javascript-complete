/*
Use  when evaluating more than four or five values.

switch(expression) {
  case value1:
    // code to be executed
    break;
  case value2:
    // code to be executed
    break;
  case value-n:
    // code to be executed
    break;
  default:
    // code to be executed when no cases match
    break;
}

- If you do not use the command break at the end of a case, it will execute the next case as well. This will be done from the case where it has a match, until the end of the switch statement or until we encounter a break statement.

- case label, namely, default. This works a lot like the else part of an if else statement. If it does not find a match with any of the cases and a default case is present, then it will execute the code associated with the default case.
- The convention is to have the default case as the last case in the switch statement, but the code will work just fine when it is in the middle or the first case. However, we recommend you stick to the conventions and have it as a last case, since that is what other developers (and probably your future self) will expect when dealing with your code later.

*/

let activity = "Breakfast";

switch(activity) {
    case "Get up":
        console.log("it is 5:00AM");
        break;
    case "Breakfast":
        console.log("It is 7:00AM");
        break;
    case "Drive to work":
        console.log("It is 8:00AM");
        break;
    case "Lunch":
        console.log("It is 12:00PM");
        break;
    case "Drive home":
        console.log("It is 5:00PM");
        break;
    case "Dinner":
        console.log("It is 6:30PM")
        break;
    default:
        console.log("Do nothing it is a weekend!");
        break;

}