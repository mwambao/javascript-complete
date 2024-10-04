/*
Getters and setters are special properties that we can use to get data from a class and
to set data fields on the class. 
Getters and setters are computed properties. So, they are more like properties than they are like functions. 
We call them accessors. They do look a bit like functions, because they have () behind them, but they are not!

These accessors start with the get and set keywords. It is considered good practice to
make fields private as much as possible and provide access to them using getters and
setters. This way, the properties cannot be set from outside without the object itself
being in control. This principle is called encapsulation. The class encapsulates the data, and the object is in control of its own fields.
Here is how to do it:
*/

// Define the Person class
class Person {
    // Private fields for firstname and lastname (denoted by the # symbol)
    #firstname;
    #lastname;

    // Constructor method to initialize firstname and lastname
    constructor(firstname, lastname) {
        // Assign the constructor parameters to the private fields
        this.#firstname = firstname;
        this.#lastname = lastname;
    }

    // Getter method to retrieve the firstname value
    get firstname(){
        return this.#firstname;
    }

    // Setter method to update the firstname value
    set firstname(firstname){
        this.#firstname = firstname;
    }

    // Getter method to retrieve the lastname value
    get lastname(){
        return this.#lastname;
    }

    // Setter method to update the lastname value
    set lastname(lastname){
        this.#lastname = lastname;
    }
}

// Create an instance of the Person class
let p = new Person("Maria", "Saga");

// Log the firstname to the console
console.log(p.firstname); // Output: Maria
