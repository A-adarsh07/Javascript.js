'use strict';
intro();

function intro(){
    console.log(`My name is Charlie`);
}


// ********** FUNCTION DECLARATION *********
function juice(apple, orange){
    console.log(`Gonna Make an awesome juice `);
    const Juicer= `Juice of ${apple} apples and ${orange} oranges`;
    return Juicer;
}

const result = juice(3,4);// juice(3,4); will give output of line 9 only. Need to store return value somewhere;
console.log(result);

let agecalc= calculateage(1997);
console.log(agecalc);

function calculateage(birthyear){
    let age=2023-birthyear;
    const Age= `You are ${age} years old`;
    return Age;
    
}


// ********** FUNCTION EXPRESSION *********

let Age= function (birthyear){
    let age =2023-birthyear;
    const result = `you are ${age} years old`;
    return result;
}
const agecalculate = Age(1999);
console.log(agecalculate);
//  WE CANNOT CALL FUNCTION  BEFORE INITIALIZATION IN FUNCTION EXPRESSION , IT'LL WILL GIVE REFERENCE ERROR.


