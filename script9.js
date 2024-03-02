// Primitive data types: 
// nnssbbu -null,Number, string, symbol, undefined, boolean, Biginit.
const balance = new Number(400.123);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

console.log(balance.toPrecision(4));
const hundreds =10000;
console.log(hundreds.toLocaleString('en-IN'));

const num = -44;
console.log(Math.abs(num));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.min(2,4,55,3));

console.log(Math.floor(Math.random()*10)+1);

// ******Important *****
const min =10
const max =50
console.log(Math.floor(Math.random()*(max-min+1)) + min);
// Added min because we need at least that min value 

let myDate =new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

let myTime = Date.now();
console.log(Math.floor(Date.now()/1000));

let Dates= new Date();
console.log(Dates.getDay());

