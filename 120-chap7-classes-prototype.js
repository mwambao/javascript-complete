/*
A prototype is the mechanism in JavaScript that makes it possible to have objects.
When nothing is specified when creating a class, the objects inherit from the
Object.prototype prototype. This is a rather complex built-in JavaScript class that
we can use. We don't need to look at how this is implemented in JavaScript, as
we can consider it the base object that is always on top of the inheritance tree and
therefore always present in our objects.
There is a prototype property available on all classes, and it is always named
"prototype." We can access it like this:

ClassName.prototype
*/


// Define the Person class
class Person {
    // Constructor to initialize firstname and lastname
    constructor(firstname, lastname) {
        this.firstname = firstname; // Assign firstname to the object
        this.lastname = lastname;   // Assign lastname to the object
    }

    // Method to print a greeting message
    greet() {
        console.log("Hi there!"); // Output a simple greeting
    }
}

// Adding a method to the Person prototype
Person.prototype.introduce = function () {
    // Introduce the person by printing their firstname
    console.log("Hi, I am ", this.firstname);
};

// Adding a property to the Person prototype
Person.prototype.favoriteColor = "green"; // All instances of Person share this property

// Create a new Person object
let p = new Person("Maria", "Saga");

// Access the prototype's favoriteColor property
console.log(p.favoriteColor); // Output: green (inherited from the prototype)

// Call the introduce method, which is also inherited from the prototype
p.introduce(); // Output: Hi, I am Maria


/*
Key Points:
- The greet() method is part of the Person class and is directly available to all instances of Person.
- The introduce() method and favoriteColor property are added to the Person.prototype, meaning all instances of Person can access them through the prototype chain.
- When accessing p.favoriteColor, it's retrieved from the prototype, not directly from the Person instance itself.
*/