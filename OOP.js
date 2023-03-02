//  Factory Function to create multiple behavior in one func

// function Circle(radiuss) {
//     return {
//         radiusss: radiuss,
//         OOP: function() {
//             console.log('draw');
//         }
//     };
// }

// const a = Circle(1);
// const b = Circle(2);
// console.log(a)
// console.log(b)

//This whole method eliminate the repetation of the same code.

// Constructor Function

  function Circle(radius) {
    this.radius = radius,
    this.draw= function() {
        console.log('draw');
    }
  }
const another =new Circle(1) //NEW OPERATOR WILL CREATE EMPTY OBJECT THAN SET THIS TO POINT THE OBJECT
console.log(another)


//Abstraction in OOP

 class Car {
   constructor(color,make,model,year) {
     this.color = color;
     this.make = make;
     this.model = model;
     this.year = year;
   }

   start() {
     console.log(`Starting the ${this.make} ${this.model}`);
   }

   accelerate() {
     console.log(`Accelerating the ${this.make} ${this.model}`)
   }

   stopping() {
     console.log(`Stopping the ${this.make} ${this.color}`)
   }
 } 

 // const myCar = new Car('red','Bmw','M3','2022')

 myCar.start();

//if their are Many fields than we will declare a variable in constructor and add them

class Car {
  constructor(Details) {
    this.color = Details.color
    this.make = Details.make
    this.model =Details.model
    this.year = Details.year
  }

  start() {
    console.log(`Starting the ${this.make} ${this.model}`);
  }

  accelerate() {
    console.log(`Accelerating the ${this.make} ${this.model}`)
  }

  stopping() {
    console.log(`Stopping the ${this.make} ${this.color}`)
  }
} 

const myCar = new Car({
  color: 'red',
  make: 'BMW',
  model: 'M3',
  year: 2022,
})

console.log(myCar.start())
myCar.accelerate()