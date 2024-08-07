let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
};

//To loop over the object keys we use 'Object.keys(nameOfObject) function' 
let arrKeys = Object.keys(car);
console.log(arrKeys);         // [ 'model', 'make', 'year', 'color' ]