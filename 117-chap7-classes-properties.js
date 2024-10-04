
/*
Often, it is not desirable to provide direct access to our properties. We want our class
to be in control of the values of properties for several reasons—perhaps we want to
do validation on a property to assure it has a certain value.

This is how to add properties that aren't accessible from outside. We prefix them
with a # symbol:
*/

class Person {
    #firstname;
    #lastname;

    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }
}

//we will get undefined for the properties as we are trying to access properties from outside. We can enable this access using setters and getters.
let p = new Person("Duncan", "Owino");
console.log(p.firstname + ' ' + p.lastname ); // undefined undefined