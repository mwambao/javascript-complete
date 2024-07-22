/*
Practice exercise 5.3
In this exercise we will use a for loop to create an array that holds objects. Starting with creating a blank array, the block of code within the loop will create an object that gets inserted into the array.

1. Setup a blank array, myWork.

2. Using a for loop, create a list of 10 objects, each of which is a numbered lesson (e.g. Lesson 1, Lesson 2, Lesson 3….) with an alternating true/false status for every other item to indicate whether the class will be running this year. For example:
name: 'Lesson 1', status: true

3. You can specify the status by using a ternary operator that checks whether the modulo of the given lesson value is equal to zero and by setting up a Boolean value to alternate the values each iteration.

4. Create a lesson using a temporary object variable, containing the name (lesson with the numeric value) and predefined status (which we set up in the previous step).

5. Push the objects to the myWork array.

6. Output the array to the console.
*/

//blank array
let myWork = [];

for (let i = 1; i <=10; i++ ){
    let status = true;
    status = true ? myWork.push('Lesson '+ i + ' Status: '+ true) : myWork.push('Lesson '+ i + ' Status: '+ false)
    myWork.push('Lesson '+ i + ' Status: '+ status);
}


age < 18 ? console.log("Denied Access") : console.log ("Allowed Access"); //Allowed Access
console.log(myWork); 

/*
[
    'Lesson 1', 'Lesson 2',
    'Lesson 3', 'Lesson 4',
    'Lesson 5', 'Lesson 6',
    'Lesson 7', 'Lesson 8',
    'Lesson 9', 'Lesson 10'
  ]
*/