console.log(5 > 4);
console.log("5" > "4");

console.log("apple" > "pineapple");
// Dictionary comparison, hence false. "a" is smaller than "p".
console.log("2" > "12");
// Again, dictionary comparison, first char "2" is greater than the first char "1".
console.log(undefined == null);
// Values null and undefined equal each other only.

console.log(undefined === null); 
// Strict equality is strict. Different types from both sides lead to false.

console.log(null == "\n0\n");   // Similar to (line 8), null only equals undefined.

console.log(null === +"\n0\n");   // Strict equality of different types.


if(0){
    console.log("hello");   //will not print hello
}

if ("0"){
    console.log("hello"); //will print hello
}

true || alert("not printed");
false || alert("printed");
// In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.
// Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.

