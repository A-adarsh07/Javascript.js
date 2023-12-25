// Javascript engine creates 'window' and 'this' keywords;
// Window is actually a global object which is created along with global execution context.
var a =10;
console.log(a);
console.log(this === window);
console.log(this.a);
console.log(window.a);

// callstack , lexical environment, scope chain, closure , global execution context
 function a(){
    var b=10;
    c();
    function c(){
        console.log(b);
    }
 }

 a();
  
//  Here the  js engine will create a call stack and in call stack a global execution context will be created where a memory will be created for function a , then above that another stack will be created for a() execution context, and above that another stack will be created for c(), 
// lexical environment is nothing but a scope chain where you'll find local environment of a function , for ex. In  a() stack , you'll find a local memory of a along with parent lexical environment. 

