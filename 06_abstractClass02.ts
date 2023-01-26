// full time  8

// contract

abstract class Employee {
//   name: string;
//   paymentPerHour: number;

  // parameterisied constructor
  constructor(public name: string, public paymentPerHour: number) {
    // this.name = name;
    // this.paymentPerHour = paymentPerHour;
  }

  // this method is abstract method only declartion
        abstract CalculateSalary(): number;
}

//let empl = new Employee();

class Contractor extends Employee {
  hoursOfWorking: number;

  constructor(name: string, paymentPerHour: number, hoursOfWorking: number) {
    // parent class constructor by using super.
    super(name, paymentPerHour);
    this.hoursOfWorking = hoursOfWorking;
  }

        CalculateSalary(): number {
    return this.paymentPerHour * this.hoursOfWorking;
  }
}

class FullTimeEmployee extends Employee {
  // parameterised contructor
  constructor(name: string, paymentPerHour: number) {
    super(name, paymentPerHour);
  }

  public CalculateSalary(): number {
    let x = this.paymentPerHour*8;
    return x;
  }
}

let objcontractor = new Contractor("Harry", 8, 10); // 40
let objfullTimeEmployee = new FullTimeEmployee("Jack", 12);

console.log(objcontractor.CalculateSalary());
console.log(`Name of Emp ${objcontractor.name}`);
console.log(objfullTimeEmployee.CalculateSalary());
