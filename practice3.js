// Design a Calulator interface for 2 number inputs which can perform sum, difference, product and dividend whenever invoked on the same interface


function Calculator(num1, num2) {
    function sum() {
      return num1 + num2;
    }
   
    function difference() {
      return num1 - num2;
    }
   
    function product() {
      return num1 * num2;
    }
   
    function dividend() {
      return Math.floor(num1 / num2);
    }
   
    return { sum, difference, product, dividend };
  }

  const calculateit= Calculator(12,5);
 console.log(calculateit.sum());
 console.log(calculateit.difference());
  console.log(calculateit.product());
  console.log(calculateit.dividend());
