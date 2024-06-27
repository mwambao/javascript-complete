/*

Practice exercise 3.2
1. Create an empty array to use as a shopping list.
2. Add Milk, Bread, and Apples to your list.
3. Update "Bread" with Bananas and Eggs.
4. Remove the last item from the array and output it into the console.
5. Sort the list alphabetically.
6. Find and output the index value of Milk.
7. After Bananas, add Carrots and Lettuce.
8. Create a new list containing Juice and Pop.
9. Combine both lists, adding the new list twice to the end of the first list.
10. Get the last index value of Pop and output it to the console.
11. Your final list should look like this:
["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice",
"Pop", "Juice", "Pop"]

*/

let shoppingList = []; //empty array
console.log(shoppingList); // []

//Add Milk, Bread, and Apples to the list
shoppingList.push('Milk', 'Bread', 'Eggs') 
console.log(shoppingList); // [ 'Milk', 'Bread', 'Eggs' ]

//update Bread with Bananas and Eggs
shoppingList.splice(1,1, 'Bananas', 'Eggs' )
console.log(shoppingList); // [ 'Milk', 'Bananas', 'Eggs', 'Eggs' ]


//remove the last item from the array and output it
console.log(shoppingList.pop()); //Eggs
console.log(shoppingList) //[ 'Milk', 'Bananas', 'Milk' ]


//sorting the list alphabetically
shoppingList.sort();
console.log(shoppingList) //[ 'Bananas', 'Eggs', 'Milk' ]


//find index of Milk
console.log(shoppingList.indexOf('Milk')); // 2

//after bananas add lettuce and carrots
shoppingList.splice(1,0, 'Lettuce','Carrots');
console.log(shoppingList); // [ 'Bananas', 'Lettuce', 'Carrots', 'Eggs', 'Milk' ]

//concat a new list twice at the end of the existing shopping list
let newShoppingList = ['Juice', 'Pop'];
combinedList = shoppingList.concat(newShoppingList, newShoppingList)
console.log(combinedList); // ['Bananas', 'Lettuce','Carrots', 'Eggs', 'Milk', 'Juice','Pop', 'Juice','Pop']

//Getting the last index of 'Pop'
console.log(combinedList.lastIndexOf('Pop')); //8
console.log(combinedList);// ['Bananas', 'Lettuce','Carrots', 'Eggs', 'Milk', 'Juice','Pop', 'Juice','Pop'

 