// #DATA TYPES
let msg = "hello";
message= 1234;
console.log(message);

// #STRING
let str= "Hello";
let strng= `can embed another string using backticks ${str}`;
console.log(strng);

// NULL -null is not a refrence to a non-existing object or a null pointer , in js it represents "nothing" ,"empty" or value unknown ;
let count = null;

// Undefined- undefined means "value is not assigned ";
let year;


let name1 = "Charlie";
console.log(`hello ${12}`);
console.log(`hello ${"name"}`);
console.log(`hello ${name1}`);

let job= "network engineer";
let company= 'Rubico IT';
year=2023;

// STRING LITERALS 

let intro= `Hello my name is ${name1} and i work in ${company} as a ${job} since ${year}`;
console.log(intro);
 

// Alert , Prompt , Confirm

let age = prompt('How old are you ?', 23);
alert(`you are ${age} years old!!`);

// The function confirm shows a modal window with a question and two buttons: OK and Cancel.
let isOld= confirm("Are you 23 yeares old ?");
alert(isOld);


// In "Strict Mode", undeclared variables are not automatically global.