function x(){
        for(var i =0;i<5;i++){
            setTimeout(function(){
                console.log(i);                     // 5,5,5,5,5
            }, i* 1000);
        }
        console.log("Heyy Rachel");
}
x();
// However, by the time these callbacks are executed, the loop has already finished and the value of i has become 5
// The setTimeout callback captures the reference to the variable i. Since var is function-scoped and not block-scoped, the same i is shared across all iterations of the loop.
// The output of i in above is pointing to the reference of i , where the value will be 5 
// ANd if we use let instead of var then we'll get 0,1,2,3,4 as output bcz let is block scope  and everytime the function run ,
// it is referring to different memory location of i   .

function x(){
    for(var i =0;i<5;i++){

        function closure(i)
        {
            setTimeout(function(){
                console.log(i);                    
            }, i* 1000);
        }
        closure(i)

        }
    console.log("Heyy Rachel");
}
x();

// Now we used function and function scoped the Var and with everytime the loop runs , it'll create a new copy of i 