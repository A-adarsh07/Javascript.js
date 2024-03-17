// Javascript execution context
// 1 - Global execution context 
// 2- Function execution context 
// 3- Eval execution context


// everytime you make function , it'll go through memory phase and execution phase 

// Filters in nodejs   >>> only used with arrays
const arr =[11,23,3,4,54];
let result= arr.filter((item)=>{
return item >11;
})

console.log(result);

