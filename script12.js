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