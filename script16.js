// Loops
for(let i=0; i<10;i++){
    const element=i;
    console.log(element);
}

let array= ["ab","cd","ef","gh"];
let i=0;
while(i <array.length){
console.log(array[i]);
i++;
}
var j=0;
function dowhile(){
do {
console.log(`the value is ${array[j]}`);
j++;
} while(j<array.length);
}

dowhile();

// FOR OF
const arr =[1,2,3,4,5];
for (const i of arr) {
    console.log(i);
}

