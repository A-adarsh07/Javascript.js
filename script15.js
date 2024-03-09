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

// Array of objects
const users = [
    {
        user1 : "Afreen",
        email: "afreen@gmail.com",
        age: 23

    },
    {
        user2 : "Xavier",
        useremail : "xavier@gmail.com",
        age : 22
    }
]
console.log(users);
console.log(users[1]);

console.log(Object.keys(users));

console.log(users.hasOwnProperty("email"));  //to find the values or property 


// Destructure the objects
// basically just a syntatically concept



// json formatter to format Api data 
// randomuser.me
