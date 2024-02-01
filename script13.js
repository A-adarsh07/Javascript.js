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


