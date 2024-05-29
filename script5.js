// javascript has 3 types of scope 
// BLOCK scope , FUNCTION scope , GLOBAL scope;

// variable declared with "var" can not have block scope.
setTimeout(function (){
    console.log("a");
});

let b = ()=> {
    console.log("c");
}
console.log("b");
b();