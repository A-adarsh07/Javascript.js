function calcTip(x){
    let tip ;
    if (50<x<300){
        tip = (15/100)*x;
        return tip;
    }
    else {
        tip = (20/100)*x;
        return tip;
    }
    
}

let bills = [125,555,44];
let i ;

for(i=0;i<bills[i];i++){
    var tip =calcTip(bills[i]);
    console.log(tip);
}