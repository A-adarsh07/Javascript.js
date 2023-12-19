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
console.log("Nan and null");
console.log(NaN == null);
console.log(NaN == undefined);

// Arrow function used  in function expression

let myage =(birthyear) => 2023-birthyear;   // same as -  let myage = function(birthyear){ return 2023-birthyear ; }

const agenow= myage(1997);

console.log(agenow);


let retirementage= birthage=> {
    let birthyear= 2023-birthage;
    let retirement= 65-birthyear;
    return retirement;
}

console.log(retirementage(1999));