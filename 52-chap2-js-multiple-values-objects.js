//Array is a special type of object which uses indexes. For object instead of indexes elements have some properties.
let arr = [0,1,2];
console.log(typeof arr); //object

//*objectname* has a(n) *property name
let dog = {
    dogName: 'JavaScript',
    weight: 2.4,
    color: 'brown',
    breed: 'Chihuahua',
    burglerBiter: true,
};


console.log(typeof dog); //object

//We can access the properties of this object in a very similar way as we would with the array. This time, we are not using the index number, but the name of the property, to get the value:

let dogColor1 = dog['color'];
console.log(dogColor1); // brown

//There is another way to do this. Instead of the square brackets, the property name can also be added to the object name with a dot in between:

let dogColor2 = dog.color;
console.log(dogColor2);//brown
