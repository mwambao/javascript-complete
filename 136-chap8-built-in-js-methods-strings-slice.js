/*
The slice() method in JavaScript is used to return a shallow copy of a portion of an array or string into a new array or string without modifying the original one. It allows you to extract parts of an array or string based on specified start and end indices

array.slice(start, end)

Parameters:
- start (optional): The index at which to begin extraction. If omitted, it defaults to 0. If negative, it begins counting from the end of the array.

- end (optional): The index at which to end extraction, but excludes the element at this index. If omitted, it extracts to the end of the array or string. Negative values count from the end.

*/

let str = "Create a substring";

let substr1 = str.slice(5)
console.log(substr1); // e a substring

let substr2 = str.slice(0,3);
console.log(substr2); // Cre

