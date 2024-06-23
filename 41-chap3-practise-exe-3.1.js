/*
1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and
"Apples."
2. Check your list length in the console.
3. Update "Bread" to "Bananas."
4. Output your entire list to the console.
*/

shoppingList = ['Milk', 'Bread', 'Apples'];
console.log(shoppingList) //[ 'Milk', 'Bread', 'Apples' ]

console.log('The list length is: ' + shoppingList.length); //3

shoppingList[1] = 'Bananas'; // update Bread to Bananas
console.log(shoppingList) // [ 'Milk', 'Bananas', 'Apples' ]
