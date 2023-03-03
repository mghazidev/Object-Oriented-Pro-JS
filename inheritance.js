//inheritance in objects

 let person = {
     fname: "",
     lname: "",
     fullName: function () {
         return this.fname + " "+ this.lname
     }
 }

 const ghazi = Object.create(person);

 ghazi.fname = "Ghazi";
 ghazi.lname = "Zaidi";

 console.log(ghazi.fullName())

//Inheritance in Class

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname
    }
    
    fullName() {
        return this.firstname + " " + this.lastname;
    }
}

//In order to inherit from the parent class we extends

class PersonTwo extends Person {
    constructor(firstname,lastname,secondname) {
        //now don't define the first name last name again just use super(and pass the keywords here)
        super(firstname,lastname);
        this.secondname = secondname;
    }

    fullid() {
        return this.fullName() + " " + this.secondname;
    }
}

let data = new PersonTwo("ghazai","zaidi","coder")
console.log(data.fullid())











