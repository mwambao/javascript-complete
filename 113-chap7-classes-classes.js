//convectional to name classes starting with a capital letter

/*
The constructor method is a special method that we use to initialize objects with our class blueprint. 
There can only be one constructor in a class. 
This constructor contains properties that will be set when initiating the class.
*/

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

/*
The new word is what tells JavaScript to look for the special constructor function in
the Person class and create a new object. The constructor gets called and returns an
instance of the person object with the specified properties. This object gets stored in
the p variable.
*/
let p = new Person("Duncan", "Mwamba");

console.log("Hi", p.firstname); // Hi Duncan


//lets try to create an object without all the properties..
let x = new Person("Mike");
console.log(x); // Person { firstname: 'Mike', lastname: undefined }


/*
You can specify default values in constructor. You would do it like this:

constructor(firstname, lastname = "Kamau") {
  this.firstname = firstname;
  this.lastname = lastname;
}

This way, it would not have printed  undefined, but Kamau.
*/