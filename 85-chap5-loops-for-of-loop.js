/*
    let arr = [some array];

    for (let variablename of arr) {
    //code to be executed
    //value of variablename gets updated each interation
    //all values of the array will be variablename once}
*/

let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

for (let name of names) {
    console.log(name);
}

/*
Chantal
John
Maxime
Bobbi
Jair

There are some limitations here; we cannot modify the array, but we could write all
the elements to a database or a file, or send it somewhere else. The advantage of this
is that we cannot accidentally get stuck in an infinite loop or skip values.
*/