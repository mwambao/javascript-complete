
/*
In a class, we can specify functions. This means that our object can start doing things
using the object's own properties—for example, printing a name. Functions on a
class are called methods. When defining these methods, we don't use the function
keyword. We start directly with the name like seen below for greet() and compliment functions.

You can specify as many methods on a class as you want.
*/

class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log("Hi there!, I am", this.firstname + ' ' + this.lastname);
    }

}

let p = new Person("Duncan", "Owino");
p.greet(); // Hi there!, I am Duncan Owino
