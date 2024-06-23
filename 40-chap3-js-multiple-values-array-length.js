//built in property lenght to get lenght of an array
colors = ['black', 'orange', 'pink', 'green'];
booleans = [true, false, false];
emptyArray = [];

console.log(colors.length); //4
console.log(booleans.length); //3
console.log(emptyArray.length) //0


numbers = [12, 24, 36];
numbers[5] = 48; //lets add element at index 5. This will make 3 & 4 indexes to be empty!
console.log(numbers); // [ 12, 24, 36, <2 empty items>, 48 ]