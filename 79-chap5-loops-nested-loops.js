/*
while (condition) {
//code that gets executed as long as condition 1 is true
    while (condition){
    //code that gets executed as long as contion 2 is true
    }
}
*/

//initialize an empty array to hold arrays
let arrOfArrays = [];

//outerloop to create 3 arrays
for (let i=0; i<3; i++){

    //innner loop to populate each sub-array with numbers 0 to 3
    arrOfArrays.push([]);
    for (let j=0; j<4; j++){
            //add the current value of j to the current sub-array
            arrOfArrays[i].push(j);
    }
}

console.log(arrOfArrays); // [ [ 0, 1, 2, 3 ], [ 0, 1, 2, 3 ], [ 0, 1, 2, 3 ] ]

//which means nested loops can be used to create tabular data.

console.table(arrOfArrays);

/*
┌─────────┬───┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │ 3 │
├─────────┼───┼───┼───┼───┤
│    0    │ 0 │ 1 │ 2 │ 3 │
│    1    │ 0 │ 1 │ 2 │ 3 │
│    2    │ 0 │ 1 │ 2 │ 3 │
└─────────┴───┴───┴───┴───┘
*/