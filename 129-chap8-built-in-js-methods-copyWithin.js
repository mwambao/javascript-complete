/*
The copyWithin() method in JavaScript is used to copy a section of an array to another location within the same array, without changing its length. It overwrites the existing values in the array with values from the array itself, effectively making it a method to "move" elements within the array.

array.copyWithin(target, start, end)

- target (required): The index position where the copy will start. This is where the copied elements will be inserted.
- start (optional): The index at which to start copying elements from the array. Default is 0.
- end (optional): The index at which to stop copying elements. The copy stops at end - 1. Default is the array's length.

*/
let myarray = ["grapefruit", 4, "hello", 5.6, true];

myarray.copyWithin(0,3,4);

console.log(myarray); // [ 5.6, 4, 'hello', 5.6, true ]