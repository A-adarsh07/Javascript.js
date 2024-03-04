const obj1= {1:"a", 2:"b"}
const obj2= {3:"a", 4:"b"}
const obj3={5:"a",6:"b"}

let obj=Object.assign({},obj1,obj2,obj3)   // Object.assign(target,source)
console.log(obj);
console.log(obj === obj1); //False
obj = Object.assign(obj1,obj2,obj3);
console.log(obj === obj1) //true

// OR we can use spread operator 
obj = {...obj1, ...obj2, ...obj3};
console.log(obj);