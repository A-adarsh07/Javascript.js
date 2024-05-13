// Function call(), function apply(), function bind().

// When a function is used as a callback, "this" is lost.

const person = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      let x = document.getElementById("demo");
      x.innerHTML = this.firstName + " " + this.lastName;
    }
  }
  
  setTimeout(person.display, 3000);   // this will show  UNDEFINED 

//   The bind() method solves this problem.


const person1 = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      let x = document.getElementById("demo");
      x.innerHTML = this.firstName + " " + this.lastName;
    }
  }
  
  let display = person1.display.bind(person1);
  setTimeout(display, 3000);
  
  