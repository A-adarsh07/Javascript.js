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


