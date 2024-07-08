//Taking advantage of break; you can combine cases. F&D will gave same results, same to C&B

let grade = "C";

switch (grade){
    case "F":
    case "D":
        console.log("You've failed!");
        break;
    case "C":
    case "B":
        console.log("You've passed!");
        break;
    case "A":
        console.log("Nice!");
        break;
    default:
        console.log("I don't know that grade");
}