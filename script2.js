// Use Strict -The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of a script, the whole script works the “modern” way.

// "use strict";

// While using const , always declare the variable;
// const job;     this will throw error .

let firstname ="Charlie";
console.log(firstname);

let msg = 'Hello !!!';
if (msg=='Hello !!!'){
    console.log("heyy")
}
else {
    alert("who are you")
}

let user = 'John', age = 25, message = 'Hello'; //can declare multiple variables at once ; don't use it 
 
// We can also declare two variables and copy data from one into the other.

let hello = "good morning";
let text  = hello;
console.log(text);


let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number

// in JavaScript, a non-empty string is always true.
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)

