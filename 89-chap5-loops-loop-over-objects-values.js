let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
};

//Similarly for: To loop over values use 'Object.values(nameOfObject)' function
console.log(Object.values(car)); //[ 'Golf', 'Volkswagen', 1999, 'black' ]

for (let i of Object.values(car)) {
    console.log(i);
}

/*
Golf
Volkswagen
1999
black
*/

//you can now loop over both arrays

let arrkeys = Object.keys(car);

for (let i = 0;  i < arrkeys.length; i++){
    console.log(arrkeys[i] + " : " + car[arrkeys[i]]);

}

/*
model : Golf
make : Volkswagen
year : 1999
color : blac
*/

//we can loop over both arrays at the same time using Object.entries(nameOfObject) function.
let arrEntries = Object.entries(car);

console.log(arrEntries);
/* This is returning 2D array
[
  [ 'model', 'Golf' ],
  [ 'make', 'Volkswagen' ],
  [ 'year', 1999 ],
  [ 'color', 'black' ]
]
*/

//as we now have key-values in the 2D array we can loop like this

for (const [key, value] of Object.entries(car)) {
    console.log(key + " : " + value);
}


/*
model : Golf
make : Volkswagen
year : 1999
color : black
*/
