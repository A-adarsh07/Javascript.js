// *****REDUCE********

const array1 = [1,2,3,4,5];
const initialv=0;
const initialsum= array1.reduce(
    (accumulator,currentvalue)=> accumulator + currentvalue,initialv );

    console.log(initialsum);
    // accumulator is empty , and whatever value we gave to initialv , it'll get stored in accumulator at first
    // and as the funtion started the values get updated and assign to accumulator

    const array2=[1,2,3]
    const mytotal =array2.reduce (function (acc,curntval){
        console.log(`acc: ${acc}`);
        return acc+curntval;
    },0)
    console.log(mytotal);

    const num1= [11,2,3,4,44];
    const reduce1 = num1.reduce(function(acc,curr){
        acc=acc+curr;
        return acc;
    },0);

    console.log(reduce1);

    // count the no of people with same age 
    const users=[
        {firstName:"charlie", lastName:"mishra",age:25},
        {firstName:"steve", lastName:"tiwari", age:23},
        {firstName:"Jonas", lastName:"sharma",age:34},
        {firstName:"munna", lastName:"tripathi",age:25},
    ];

const age= users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    } else {
        acc[curr.age]=1;
    }
    return acc;
},{}); // the accumulator will take the object as initial value.

console.log("users age" ,age);

// FIND THE NO OF PEOPLE WHO ARE UNDER AGE 30 AND THEIR FIRSTNAME
// CHAINING METHOD 
const chaining= users.filter((x)=> x.age < 30).map((x)=> x.firstName);
console.log(chaining);

// SOLVING THE ABOVE SOLUTION USING REDUCE 
const Age30= users.reduce(function(acc,curr){
    if(curr.age<30){
        acc.push(curr.firstName);
    }
    return acc;
},[]);
console.log(Age30);

// **** FILTER ****
    const arr = [5,1,3,4,6]
    
    function greaterthan3(x){
        return x>3;
    }

    const output = arr.filter(greaterthan3);  
    // OR we can also write this 
    const output1= arr.filter((x) => x>3);
    console.log(output);
    console.log(output1);
    console.log(arr);

