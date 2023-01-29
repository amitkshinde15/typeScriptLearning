// abstract class College {
//   constructor(
//     public facultyName: string,
//     public age: number,
//     public typeOfEmp: string,
//     public paymentPerHour: number
//   ) {}
//   public abstract calculateSal(): number;
// }

// class facultyCompDept extends College {
//   constructor(
//     public facultyName: string,
//     public age: number,
//     public typeOfEmp: string,
//     public paymentPerHour: number,
//     public facultyDept: string,
//     public hoursOfWork: number
//   ) {
//     super(facultyName, age, typeOfEmp, paymentPerHour);
//   }
//   public calculateSal(): number {
//     console.log(this.facultyName,this.age,this.typeOfEmp,this.paymentPerHour);
    
//     var result;
//     if (this.typeOfEmp == "Contract") { 
//       result = this.paymentPerHour * this.hoursOfWork;    
//     } else if (this.typeOfEmp == "Permanent") {
//     result = this.paymentPerHour * 8;
//     }
//     else {
//       if (this.typeOfEmp !== undefined) {
//         result = 0;
//       }
//     }
//     return result;
//   }
// }
// class facultyElectronicDept extends College {
//   constructor(
//     public facultyName: string,
//     public age: number,
//     public typeOfEmp: string,
//     public paymentPerHour: number,
//     public facultyDept: string,
//     public hoursOfWork: number
//   ) {
//     super(facultyName, age, typeOfEmp, paymentPerHour);
//   }
//   public calculateSal(): number {
//     return this.paymentPerHour * this.hoursOfWork;
//   }
// }

// let facultyComp = new facultyCompDept(
//   "Computer",
//   29,
//   "Contract",
//   125,
//   "Comp Department",
//   12
// );
// let facultyEle = new facultyElectronicDept(
//   "Electronics",
//   32,
//   "Contract",
//   200,
//   "Ele Department",
//   8
// );
//  console.log(facultyComp.calculateSal());
//  console.log(facultyEle.calculateSal());
// // let x = facultyComp.calculateSal();
// // console.log(x);



abstract class CollegeFaculty{

  constructor(public facultyName: string, public age: number, public typeOfEmp: string, public paymentPerHour: number, public hoursOfWork:number){

  }
  
  calculateSal(): void{
   
          if(this.typeOfEmp=="Contract"){
              console.log(`${this.facultyName} is contract basis & income is "INR ${(this.paymentPerHour * this.hoursOfWork) * 25}" `);
          }else if (this.typeOfEmp=="Permanent"){
            console.log(`${this.facultyName} is permanent so, monthly income is "INR ${this.paymentPerHour * 8 * 30 }"`);
          }
              else{
                  console.log(`Please provide faculty type Contract or Permanent basis you have provided "${this.typeOfEmp}"`);
           
        }       
  }
   getDetails():void {
      console.log(`Dear ${this.facultyName},
  your age is ${this.age} and faculty employment type is ${this.typeOfEmp}`);        
   };

   abstract facultyDeptTotalFaculty(): string

}

class facultyCompDept extends CollegeFaculty{

  constructor(public facultyName:string,  public age: number, public typeOfEmp: string,public paymentPerHour: number,public facultyDept:string, public hoursOfWork:number){
  super(facultyName, age, typeOfEmp, paymentPerHour,hoursOfWork);
  }
  
      facultyDeptTotalFaculty(): string {
      return "Computer department has total 12 faculties"
    }
     
}
class facultyElectronicDept extends CollegeFaculty{

  constructor(public facultyName:string,  public age: number, public typeOfEmp: string,public paymentPerHour: number,public facultyDept:string, public hoursOfWork:number){
      super(facultyName, age, typeOfEmp, paymentPerHour, hoursOfWork);
     
  }
      facultyDeptTotalFaculty(): string {
      return "E&TC department has total 7 faculties"
    }

}

let objCompDept = new facultyCompDept("Hitesh", 26, "Permanent", 235, "Computer",1)
let objCompDept1 = new facultyCompDept("Amit", 34, "Permanent", 250, "Computer",1)

let objElectronicDept = new facultyElectronicDept("Kajal", 26, "Contract", 40, "Computer",23)
let objElectronicDept1 = new facultyElectronicDept("Soham", 29, "Contract", 50, "Computer",23)

objCompDept.getDetails();
objCompDept.calculateSal();
objCompDept1.getDetails();
objCompDept1.calculateSal();
console.log(objCompDept1.facultyDeptTotalFaculty());

console.log(``);
console.log(`------------------------------------------------------------------`);


objElectronicDept.getDetails();
objElectronicDept.calculateSal();
objElectronicDept1.getDetails();
objElectronicDept1.calculateSal();
console.log(objElectronicDept1.facultyDeptTotalFaculty());
