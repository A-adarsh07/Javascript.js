let conf = confirm("You must be at least 18 years old to view this content.?");
let name = prompt("What's your name?", "");
let age = prompt("What's your age?", "");
let genderBender = prompt("What is your gender ?", "")
let raceIzm = confirm("Are you black ?")

if (age>=18 && raceIzm == false) {
alert("You can loose v without criminal charges!");
} else {
alert("FBI OPEN UP!!!");  }

// Let and const = provide Block Scope in js ,
// variables declared inside a {} block cannot be accessed from outside the block. Var is not block scoped.

// Variables defined with var are hoisted to the top and can be initialized at any time.

// Meaning: You can use the variable before it is declared:
 carName ="Volvo";
 var carName;

 
 