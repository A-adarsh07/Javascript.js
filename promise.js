// function getData(dataId, nextdata){
//     return new Promise((resolve, reject) => {
//         setTimeout( () =>{
//             console.log("data", dataId);
//             resolve("success");
//             if(nextdata){
//                 nextdata();
//             }
//         },3000);
//     });
// }

// let promise= getData(123);


const getPromise=()=> {
    return new Promise((resolve, reject) => {
        console.log("Killer God ");
        resolve("Hello 911");
        // reject("some error");

    });
};

let promise = getPromise();
promise.then((res) => {                    //we can also pass some parameter in 'then' and 'catch' .
    console.log("promise fulfilled",res);
});

promise.catch((err)=> {
    console.log("rejected",err);
});


// Promise chain -  
function asyncfunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("data1");
            resolve("success");
        },3000);
    });
}

function asyncfunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success again");
        },4000);
    });
}

function asyncfunc3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data3");
            resolve(" again");
        },4000);
    });
}

console.log("fetching data1 ....");
// let p1 = asyncfunc1();
// p1.then((res)=> {
//     console.log("fetching data2....");
//     let p2 = asyncfunc2();
//     p2.then((res)=> {});
// });

// we can also write the above command as 

// asyncfunc1().then((res)=> {
//     console.log("fetching data2 ...");
//     asyncfunc2().then((res)=> {});
// });
// OR

asyncfunc1().then((res)=>{
    console.log("fetching data 2...");
    return asyncfunc2();
})
.then((res)=> {
    console.log("fetching data 3...");
    return asyncfunc3();
});


// ASYNC FUNCTION ALWAYS RETURNS A PROMISE;
// AWAIT PAUSES THE EXECUTION OF ITS SURROUNDING ASYNC FUNCTION UNTIL THE PROMISE IS SETTLED


 async function hello (){
    console.log("heeloo");
  }