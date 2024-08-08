
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i == 4) {  // as roon as i == 4 the loop will break 
        break;
    }
}

/*
0
1
2
3
4
*/

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

//console.log(cars[0]);

// Loop through each car in the 'cars' array
for (let i = 0; i < cars.length; i++) {
    
    // Check if the car's year is 2020 or newer
    if (cars[i].year >= 2020) {
        
        // If the car is black
        if (cars[i].color === "black") {
            
            // Log a message and the car object to the console
            console.log("I have found my new car:", cars[i]);
            
            // Exit the loop as we have found the desired car
            break;
        }
    }
}

//I have found my new car: { model: 'Peugot', make: '208', year: 2021, color: 'black' }