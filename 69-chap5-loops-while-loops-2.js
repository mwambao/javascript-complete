// Initialize an array with a list of names
let someArray = ["Mike", "Antal", "Marc", "Emir", "Luiza", "Jacky"];

// Initialize a flag to indicate whether "Luiza" has been found
let notFound = true;

// Continue looping while "Luiza" has not been found and the array is not empty
while (notFound && someArray.length > 0) {
    // Check if the first element in the array is "Luiza"
    if (someArray[0] === "Luiza") {
        // If it is, print a message indicating that "Luiza" has been found
        console.log("Found her!");
        // Set the flag to false to stop the loop
        notFound = false;
    } else {
        // If it is not, remove the first element from the array
        someArray.shift();
    }
}
