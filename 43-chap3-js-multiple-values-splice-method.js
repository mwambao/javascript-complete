let arrOfShapes = ['circle', 'triangle', 'rectangle', 'pentagon'];
arrOfShapes.splice(2,0, 'square', 'trapezoid');

console.log(arrOfShapes);
/*
[
  'circle',
  'triangle',
  'square',
  'trapezoid',
  'rectangle',
  'pentagon'
]

2 -->  index where we want to start inserting at.
0 --> The number of elements that we need to delete while inserting
'square', 'trapezoid' --> The elements that we need to insert

*/

let arrOfShapes2 = ['circle', 'triangle', 'rectangle', 'pentagon'];
arrOfShapes2.splice(2,2, 'square', 'trapezoid');
console.log(arrOfShapes2) // [ 'circle', 'triangle', 'square', 'trapezoid' ]. rectangle and pentagon are now replaced with square and trapezoid.



