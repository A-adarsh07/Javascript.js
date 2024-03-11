// block scope , function scope 

let a =10 ;
{
    let a =110;
    var b = 20;
    const c =2;
    console.log(a);
    console.log(b);
}

console.log(a);   // here let and const are block scoped , and var is global so that var can be accessed outside of the block.
console.log(b);

console.log("shadowing");

var j =11;
let k =22;

{
    var j =12;
    let k =23;
    console.log(j); //12
    console.log(k);
}

console.log(j);  // 12   Here value of J is remained the same bcz it not blocked scope. but the value of let is different.
console.log(k);



console.log("function scope");
let x =10;
var y =20;
 
function f(){
    let x=2;
    var y =4;
    console.log(x);
    console.log(y);

}
f();
    console.log(x);   //here var will not shadow his value  bcz it's inside the function and it is function scoped, 
    console.log(y);



    // Primitive data types(number, string,boolean, bigInt, ) = stacks
    // Non-primitive types(array,objects, function)= Heaps 

    let myname="Adarshmishra";
    let officename=myname;
    officename="Charlieadarsh";

    console.log(myname);
    console.log(officename);

    let emp1={
        email:"charlieadarsh@google.com",
        username:"charlieadarsh"
    }
    let emp2=emp1;
    console.log(emp2); 
    emp2.email="charlieadarsh10@google.com";   //Here in heap memory the value will be changed for emp1 also bcz of refrence value.
    console.log(emp1.email); 
    console.log(emp2.email);

    