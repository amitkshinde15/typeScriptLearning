abstract class College {
  constructor(
    public facultyName: string,
    public age: number,
    public typeOfEmp: string,
    public paymentPerHour: number
  ) {}
  public abstract calculateSal(): number;
}

class facultyCompDept extends College {
  constructor(
    public facultyName: string,
    public age: number,
    public typeOfEmp: string,
    public paymentPerHour: number,
    public facultyDept: string,
    public hoursOfWork: number
  ) {
    super(facultyName, age, typeOfEmp, paymentPerHour);
  }
  public calculateSal(): number {
    console.log(this.facultyName,this.age,this.typeOfEmp,this.paymentPerHour);
    
    var result;
    if (this.typeOfEmp == "Contract") { 
      result = this.paymentPerHour * this.hoursOfWork;    
    } else if (this.typeOfEmp == "Permanent") {
    result = this.paymentPerHour * 8;
    }
    else {
      if (this.typeOfEmp !== undefined) {
        result = 0;
      }
    }
    return result;
  }
}
class facultyElectronicDept extends College {
  constructor(
    public facultyName: string,
    public age: number,
    public typeOfEmp: string,
    public paymentPerHour: number,
    public facultyDept: string,
    public hoursOfWork: number
  ) {
    super(facultyName, age, typeOfEmp, paymentPerHour);
  }
  public calculateSal(): number {
    return this.paymentPerHour * this.hoursOfWork;
  }
}

let facultyComp = new facultyCompDept(
  "Computer",
  29,
  "Contract",
  125,
  "Comp Department",
  12
);
let facultyEle = new facultyElectronicDept(
  "Electronics",
  32,
  "Contract",
  200,
  "Ele Department",
  8
);
 console.log(facultyComp.calculateSal());
 console.log(facultyEle.calculateSal());
// let x = facultyComp.calculateSal();
// console.log(x);

