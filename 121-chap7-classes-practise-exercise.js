/*
Create a class that contains properties for different animal species and the sound that
each species makes, and create two (or more) animals:

1. Create a method that prints a given animal and its sound.

2. Add a prototype with another action for the animal.

3. Output an entire animal object into the console.

*/

//class that has different animals with different sounds
class Animals {
    //initialize animal name and sound
    constructor(animalName, animalSound){
        this.animalName = animalName;
        this.animalSound = animalSound;
    }

    //method that prints animal name and sound
    printAnimalSound(){
        console.log("Animal name: ", this.animalName, ",Sound:" , this.animalSound);
    }
}

//create prototype named animalActions.
Animals.prototype.animalActions = function () {
    console.log("Hello my name is: ", this.animalName);
}

//create a new object using the class
let x = new Animals("Lion", "Roar");
//call the method to print animal object
x.printAnimalSound(); // Animal name:  Lion ,Sound: Roar

//create another object using the class
let y = new Animals("Snake", "Hiss");
//call the method to print animal object
y.printAnimalSound(); // Animal name:  Snake ,Sound: Hiss


//calling prototype
y.animalActions(); // Hello my name is:  Snake
