
/*
Practice exercise 3.5
1. Create an object named people that contains an empty array that is called
friends.
2. Create three variables, each containing an object, that contain one of your
friend's first names, last names, and an ID value.
3. Add the three friends to the friend array.
4. Output it to the console.
*/

//an object named people that contain an empty array called friends
let people = {
    friends:[]
};

console.log(people); //{ friends: [] }

//1st variable
variableX = {
    firstName : 'Alex',
    lastName: 'Macharia',
    idValue: '2345'
};

//2nd variable
variableY = {
    firstName : 'Michael',
    lastName: 'Owino',
    idValue: '1301'
}

//3rd variable
variableZ = {
    firstName : 'Faith',
    lastName: 'Ngao',
    idValue: '7890'
}

//adding the three to the array
people.friends.push(variableX, variableY, variableZ)

console.log(people);

/*
{
  friends: [
    { firstName: 'Alex', lastName: 'Macharia', idValue: '2345' },
    { firstName: 'Michael', lastName: 'Owino', idValue: '1301' },
    { firstName: 'Faith', lastName: 'Ngao', idValue: '7890' }
  ]
}
*/

