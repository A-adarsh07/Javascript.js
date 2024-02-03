// Objects
const Adarsh={
    clientName:"Charlie",
    firstName:"Adarsh",
    job:"Network Engineer",
    experience:1,
    technology:['Linux','Docker','Mysql','Nginx','AWS']

};

console.log(Adarsh);
console.log(Adarsh.job);  //first way dot notation
console.log(Adarsh['firstName']); //second way  Bracket notation . preferred way

const query= prompt('what do you want to know about Adarsh ? Choose between clientName,firstName,job,experience,technology');
console.log(Adarsh[query]);

// console.log(Adarsh.query); this will give error 'undefined' because there is no key:value pair with this name . 

if (Adarsh[query]){
    console.log(Adarsh[query]);
} 
else {
    console.log('wrong request !! choose between clientName, firstName, job, experience,technology');
}

// Add elements in objects
Adarsh.location='Haridwar';
Adarsh['lastName']='Mishra';
