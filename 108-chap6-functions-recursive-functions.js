//recursive function is a function that calls itself

// Define a function named getRecursive that takes one parameter, nr
function getRecursive(nr) {
    // Log the current value of nr to the console
    console.log(nr);
    
    // Check if the current value of nr is greater than 0
    if (nr > 0) {
        // If the condition is true, call the function recursively, 
        // decrementing the value of nr by 1 before passing it to the function
        getRecursive(--nr);
    }
    // When nr is 0, the recursion stops as the condition nr > 0 will be false
}

// Call the function with an initial value of 3
getRecursive(3);


/*
3
2
1
0
*/