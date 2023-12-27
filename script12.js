// Functions

let student ="rahul";
function names (){
    student ="john";
    let msg ="hello" + student;
    console.log(msg);

}

console.log(student); 
names();
console.log(student); // Here the student value get shadowed by function

let scout ="roy";
function army (){
    let scout ="jonas";
    let msg ="hello " +scout;
    console.log(msg); 
}
army();
console.log(scout); //here the function will use its local variable , and will not change the outer variable.