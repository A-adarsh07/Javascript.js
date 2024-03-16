// Function with Objects and Arrays

// Rest operator

function calculateprice (...num1){
    return num1
}

console.log(calculateprice(200,300,4000,5000));
// the return will create an Array with all the values inside of it. , this is called rest operator.

// ******  ARROW & THIS ***********
const addtwo = (num1, num2) => {
    return num1+num2;
}

const add2 = (num1,num2) => (num1+num2) ;  // If there is no curly bracket {} then no need to use 'return' keyword

console.log(addtwo(2,2)); 

// IIFE = Immediately Invoked Function Expressions

(function chai(){
    console.log('Bring me masala chai');
})();

// we can also write this using arrow function 
( (name) => {
    console.log(`Chai badhiya hai ${name}`);
})('sam');