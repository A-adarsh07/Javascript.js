
// A package is a chunk of code that can be distributed (copied and installed). It may contain one or more modules and has information about which other packages it depends on. 
// A module is a piece of program that specifies which other pieces it relies on and which functionality it provides for other modules to use (its interface).
// The relations between modules are called dependencies. When a module needs a piece from another module, it is said to depend on that module.         




// Functions

let student ="rahul";
function names (){
    student ="john";
    let msg ="hello" + student;
    console.log(msg);

}

console.log(student); 
names();
console.log(student); // Here the student value get shadowed by function

let scout ="roy";
function army (){
    let scout ="jonas";
    let msg ="hello " +scout;
    console.log(msg); 
}
army();
console.log(scout); //here the function will use its local variable , and will not change the outer variable.


// The Arguments keyword 
// The Argument keyword refers to an object that contains all the arguments passed to a function.
// Similar to array but not actual array , we can make use of the .length method to know how many parameters are passed.

function sumOfAllParameters(){
    console.log(arguments.length);
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i]; 
    }
    return sum;
}
console.log(sumOfAllParameters(1,2,3,4,5,6,76,55));


// Anonymous functions
// Immediately invoked functions Execution(IIFE);
(function (num){
    console.log("IIFE function")
    console.log(num*num);
})(5);                  // giving argument for function.


const xyz= Symbol('123');   //symbol is a primitive data type.
const z=Symbol('123');
console.log(xyz);
console.log(z);
console.log(xyz == z);


// Function returning another function
function higherOrderFunction() {
    function displayHello() {
      console.log("Hello");
    }
    return displayHello;
  }
   
  // driver code
var func=  higherOrderFunction();
func();

//First-Class function : First-class functions when functions in that language are treated like any other variable
function sayHello() {
    return "Hello, ";
  }
  function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
  }
  // Pass `sayHello` as an argument to `greeting` function
  greeting(sayHello, "JavaScript!");
  //A function that returns a function or takes other functions as arguments is called a higher-order function.

//  The function that we pass as an argument to another function is called a callback function. sayHello() is a callback function. 

function callbackExecutor(callback) {
    if (typeof callback === "function") {
      callback();
    }
  }
   
  // driver code
  function callbackFunc() {
    console.log("Callback function executed");
  }
   
  callbackExecutor(callbackFunc); // Callback function executed

