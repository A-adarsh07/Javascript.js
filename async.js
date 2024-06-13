async function getdata(){
    return "promise";
}
// ASYNC FUNCTION ALWAYS RETURNS A PROMISE 
//  ASYNC -AWAIT IS USED TO HANDLE THE PROMISES
let input = getdata();
// console.log(input);
input.then((res) => console.log(res));



// earlier 
let p1 = new Promise((resolve,reject)=> {
    setTimeout(() => {
        resolve(" P1 promise is resolved");
    },5000);
        
});
let p2 = new Promise((resolve,reject)=> {
    setTimeout(() => {
        resolve("P2 promise is resolved");
    },3000);
        
});
// ******************************************* Promise handling using normal way 
// function data1(){
//     p1.then(res => console.log(res));  
        // console.log("here this line will be print first and then the output of P will be printed ");
// }
// data1();    



// *************************************Promise handling using async-await

async function handlepromise(){
    let result= await p1;     // Here JS Engine will wait for promise to be resolved then the other line will be printed .
    console.log(result);
    console.log("waiting for proimise"); 

//  Since JS is synchronous language so it'll wait for the result then it'll move ahead, but the call stack will get empty and if there is some other function is to be 
// executed , it'll execute it , will not block other things
        console.log("result 2 ");
    let result2 = await p2;
    console.log(result2);
    
    console.log("welcome")
}
handlepromise();

// *********************** REAL LIFE EXAMPLE USING FETCH ***********
// read about fetch and how it works 
// fetch() => Response.json() => jsonValue
 
const API_URL = "https://api.github.com/users/A-adarsh07"
async function handlepromisefetch(){
    const data =await fetch(API_URL);
    const jsonvalue = await data.json();
        console.log(jsonvalue);

// ERROR HANDLING USING TRY-CATCH METHOD , INSTEAD OF THEN AND CATCH

try {
    const data =await fetch(API_URL);
    const jsonvalue = await data.json();
        console.log(jsonvalue);
}

catch(err){
    console.log('error');
}

}
handlepromisefetch();
// OR WE CAN ALSO HANDLE THE ERROR , USING OLDER METHOD;
// handlepromisefetch().catch((err) => console.log('error)); just remove the try syntax
