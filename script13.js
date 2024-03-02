// ARRAYs 
const friends= ['Michael','peter','charlie']; //1st method to declare array
console.log(friends);
const years= new Array(1991,1988,1998); //2nd method 
console.log(years);

friends[2]='Jay';
console.log(friends);

const x =1999;
const jonas=[x, 'charlie',2024-x,friends];
console.log(jonas);
friends.push('charlie'); // Add new element to the end of array.
friends.unshift('John'); //add new element to the begin of the array.
console.log(friends);

friends.pop();  // this cmd will remove the last element from array.
friends.pop();
console.log(friends);

friends.shift(); //will remove the first element.
console.log(friends);

//The INCLUDES method will show if the element is present or not in the array. will show the result in boolean value.
console.log(friends.includes('charlie'));
console.log(friends.includes('peter'));

if (friends.includes('peter')){
    console.log("You are also the admin of WP group");
}

const Years =[1992,1993,1988,1999];
const ages=[];
for (let i =0;i<Years.length;i++){
    ages.push(2024-Years[i]);
}
console.log(ages);

// Join 
const newArray = Years.join()
console.log(newArray);
console.log(typeof newArray);

// slice, splice
// slice - returns a copy of  a section of an Array
const myn1= Years.slice(1,3)
console.log(myn1);

// splice =  it returns the selected input but also manipulate the  Array. it'll change the values also .
const myn2= Years.splice(1,3);
console.log(myn2);

console.log(Years);


// Concatenate the strings

const team1= ['Rohit', 'Bumrah','Surya']
const team2= ['Virat', 'ABD', 'Gayle']

const team3= team1.concat(team2);
console.log(team3);

// Another method to add strings **Preferrable 
const starteam= [...team1, ...team2];
console.log(starteam);


// Convert variables into array  using - Array.of()    
let val1= 100;
let val2=22;
let val3= 400;
console.log(Array.of(val1,val2,val3));
