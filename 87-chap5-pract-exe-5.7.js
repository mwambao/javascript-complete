/*
Practice exercise 5.7
In this exercise, we will experiment with looping over objects and internal arrays.
1. Create a simple object with three items in it.
2. Using the for in loop, get the properties' names and values from the object
and output them into the console.
3. Create an array containing the same three items. Using either the for loop or
the for in loop, output the values from the array into the console.
*/

// Define an object 'book' with properties: title, color, and author
let book = {
    title: "Javascript for beginners to experts", // Title of the book
    color: "Black",                                // Color of the book cover
    author: "Duncan O",                            // Author of the book
};

// Use a for-in loop to iterate over each property in the 'book' object
for (let i in book) {
    // Log the property name and its value to the console in the format "property : value"
    console.log(i + " : " + book[i]);
}

/*
The above loop will output:
title : Javascript for beginners to experts
color : Black
author : Duncan O
*/

// Define an empty array 'myArray'
let myArray = [];

// Use a for-in loop to iterate over each property in the 'book' object
for (let x in book) {
    // Push the value of each property into the 'myArray'
    myArray.push(book[x]);
}

// Log the 'myArray' to the console, which contains the values of the 'book' object's properties
console.log(myArray); // [ 'Javascript for beginners to experts', 'Black', 'Duncan O' ]
