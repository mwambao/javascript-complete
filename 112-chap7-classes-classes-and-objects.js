
//classes are just some special function beneath the surface.
//if we have a person object, this object could have properties called age and lastName that contain values. Here is an example of an object:
/*
let dog =  { dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua"
};

//Classes in JavaScript encapsulate data and functions that are part of that class. If you create a class, you can later create objects using that class using the following syntax:
//class sntax in JS
class ClassName {
    constructor(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2
    }
}

//declared a new obj variable and initialize this with new instance of the object.
/* Two arguments are provided. These arguments will be used by the constructor to initialize the properties. As you can
see, the parameters of the constructor and the properties of the class (prop1 and prop2) have the same name.
The properties of the class can be recognized by the this keyword in front of them. 
The this keyword refers to the object it belongs to, so it is the first property of the instance of ClassName.*/

//let obj = new ClassName("arg1", "arg2");

//Rememeber we said classes are just some special function beneath the surface
/*
function Dog(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
}

let dog = new Dog("Jacky", 30, "brown", "Labrador");

console.log(dog.dogName); // Jacky
*/
//This can be written using a class syntax as well:

class Dog {
    constructor(dogName, weight, color, breed) {
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed = breed;
    }
}

let dog = new Dog("Javascript", 2.4, "green", "German shepherd");
console.log(dog.dogName) // Javascript

