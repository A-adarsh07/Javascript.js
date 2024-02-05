const employee = {
    firstName:"Jonas",
    birthyear:1991,
    profession:"teacher",
    calcAge: function(){
        return 2024-1991;
    },
    hasDriverLicence:true,
    getSummary:function(){
        return `${this.firstName} is ${this.calcAge()} years old ${this.profession} and has ${this.hasDriverLicence ?"a":"no"} driver licence`;
    }
};
console.log(employee.getSummary());
