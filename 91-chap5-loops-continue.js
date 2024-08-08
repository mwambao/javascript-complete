//continue is used to move on to the next iteration of the loop. it quits the current interation and moved back up to check the condition and start a new iteration


let cars = [
    { 
        model: "Golf",
        make: "Volkswagen",
        year: 1999,
        color: "black",
    },
    { 
        model: "Picanto",
        make: "Kia",
        year: 2020,
        color: "red",
    },
    { 
        model: "Peugot",
        make: "208",
        year: 2021,
        color: "black",
    },
    { 
        model: "Fiat",
        make: "Punto",
        year: 2020,
        color: "black",
    },
]

// Loop through each car in the 'cars' array using a 'for...of' loop
for (let car of cars) {

    // Check if the car's color is not black
    if (car.color != "black") {
        // Skip this iteration and move to the next car
        continue;
    }

    // Check if the car's year is 2020 or newer
    if (car.year >= 2020) {
        // Log a message and the car object to the console
        console.log("We could get this one: ", car);
    }
}


/*
We could get this one:  { model: 'Peugot', make: '208', year: 2021, color: 'black' }
We could get this one:  { model: 'Fiat', make: 'Punto', year: 2020, color: 'black' }
*/

/*
The value of break and continue usually comes in when you are looping over large data sets, possibly
coming from outside your application. Here you'll have less influence to apply other
types of control. Using break and continue is not a best practice for simple basic
examples, but it's a great way to get familiar with the concepts.

*/