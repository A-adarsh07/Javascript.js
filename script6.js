'use strict';
function intro(){
    console.log(`My name is Charlie`);
}

intro();

// ********** FUNCTION DECLARATION *********
function juice(apple, orange){
    console.log(`Gonna Make an awesome juice `);
    const Juicer= `Juice of ${apple} apples and ${orange} oranges`;
    return Juicer;
}

// juice(3,4); will give output of line 9 only. Need to store return value somewhere;
const result = juice(3,4);
console.log(result);

function calculateage(birthyear){
     let age=2023-birthyear;
    const Age= `You are ${age} years old`;
    return Age;
}

let agecalc= calculateage(1997);
console.log(agecalc);

// ********** FUNCTION EXPRESSION *********

let Age= function (birthyear){
    let age =2023-birthyear;
    const result = `you are ${age} years old`;
    return result;
}
const agecalculate = Age(1999);
console.log(agecalculate);