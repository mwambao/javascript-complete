
// Define an object 'car' with properties: model, make, year, and color
let car = {
    model: "Golf",          // Model of the car
    make: "Volkswagen",     // Manufacturer of the car
    year: 1999,             // Year the car was made
    color: "black"          // Color of the car
 };
 
 // Use a for-in loop to iterate over each property in the 'car' object
 for (let prop in car) {
     // Log the value of each property to the console
     console.log(car[prop]);
 }
 

/*
Golf
Volkswagen
1999
black
*/