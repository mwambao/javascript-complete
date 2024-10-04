/*
--Inheritance--
Inheritance is one of the key concepts of OOP. It is the concept that classes can have
child classes that inherit the properties and methods from the parent class. For
example, if you needed all sorts of vehicle objects in your application, you could
specify a class named Vehicle in which you specify some shared properties and
methods of vehicles. You would then go ahead and create the specific child classes
based on this Vehicle class, for example, boat, car, bicycle, and motorcycle.
*/


// Define the Vehicle class
class Vehicle {
    // Constructor method to initialize color, currentSpeed, and maxSpeed
    constructor(color, currentSpeed, maxSpeed) {
        // Assign the constructor parameters to the object's properties
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }

    // Method to simulate the vehicle's movement
    move(){
        console.log("moving at", this.currentSpeed); // Log current speed to the console
    }

    // Method to increase the vehicle's current speed by a given amount
    accelerate(amount){
        this.currentSpeed += amount; // Increment current speed by the given amount
    }
}

// Define the Motorcycle class that extends (inherits from) the Vehicle class
class Motorcycle extends Vehicle {
    // Constructor method to initialize color, currentSpeed, maxSpeed, and fuel
    constructor(color, currentSpeed, maxSpeed, fuel){
        // Call the parent class (Vehicle) constructor with the super() method
        super(color, currentSpeed, maxSpeed);
        // Assign fuel type to the motorcycle
        this.fuel = fuel;
    }

    // Method specific to Motorcycle to simulate doing a wheelie
    doWheelie(){
        console.log("Driving on one wheel"); // Log a message when doing a wheelie
    }
}

// Create a new Motorcycle object
let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color); // Output: Black

// Accelerate the motorcycle by 50 units
motor.accelerate(50);

// Call the move method to log the current speed
motor.move(); // Output: moving at 50


/*
Key Points:
- Vehicle is the parent class, with properties like color, currentSpeed, and maxSpeed.
- Motorcycle is a subclass (child class) of Vehicle and inherits its properties and methods using super().
- The doWheelie() method is unique to the Motorcycle class, while accelerate() and move() are shared through inheritance from Vehicle.
*/