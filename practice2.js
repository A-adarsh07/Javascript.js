var sellingPrice = 199;
var listingPrice= 700;
var discount= ((listingPrice-sellingPrice)/listingPrice) *100;

console.log(`Discount percentage is : ${discount}`);
console.log(`Discount percentage is :${Math.round(discount)}`);

// Allow user to access if he/she logged from any account

var email=true;
var facebook= false;
var google= true;

if (email ||facebook || google){
    console.log("Login successfully");
}