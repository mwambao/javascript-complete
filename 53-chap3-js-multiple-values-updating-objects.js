let dog = {
    dogName: 'JavaScript',
    weight: 2.4,
    color: 'brown',
    breed: 'Chihuahua',
    age: 3,
    burglerBiter: true,
};

//lets change the values of the properties of an object. This is similar way we do with arrays.
dog['color'] = 'Blue';
dog.weight = 5.0;

console.log(dog);
/*
{
  dogName: 'JavaScript',
  weight: 5,
  color: 'Blue',
  breed: 'Chihuahua',
  age: 3,
  burglerBiter: true
}
*/

//JS is also okay if we change the data type of one our properties values e.g.

dog.age = 'three';
console.log(dog.age); //three

//we can also use variables
let variable1 = 'breed';
console.log(dog[variable1]); //Chihuahua

//then if we update the variable we can see the new property value.
dog.variable1 = 'Mutina';
console.log(dog.variable1); // Mutina
