'use strict';
// When comparing values of different types, JavaScript converts the values to numbers.
console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log( '01' == 1 ); // true, string '01' becomes a number 1

console.log(2 > '1');
console.log('01' === 1); //strict equality(===), leaves no room for error.

console.log(null == undefined); //true 
console.log(null === undefined); //false

// A strict equality operator === checks the equality without type conversion.

console.log(0 === false) // false.
console.log(null == undefined);   //true
console.log(null === undefined);   // false


