
// conditional statements;

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

// if (year == 2015) alert( 'You are right!' );
if (year == 2015) {
    alert( "That's correct!" );
    alert( "You're so smart!" );
}
//   If you want to execute more than one statement ,wrap your code inside curly brackets

// in If(...) conditions , converts the result to boolean.

// A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
if("0"){
    alert('hello');  // it'll show hello bcz it is not empty.
}

// Ternary operator 
let age = prompt('age?', 18);
let accessAllowed = (age > 18) ? true : false;

// Miultiple operator

let message = (age < 3) ? 'Hi, baby!' :
(age < 18) ? 'Hello!' :
(age < 100) ? 'Greetings!' :
  'What an unusual age!';
  
  alert( message );
  
// same code in if else condition:
if (age < 3) {
    message = 'Hi, baby!';
  } else if (age < 18) {
    message = 'Hello!';
  } else if (age < 100) {
    message = 'Greetings!';
  } else {
    message = 'What an unusual age!';
  }