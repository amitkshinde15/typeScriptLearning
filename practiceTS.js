// abstract class College {
//   constructor(
//     public facultyName: string,
//     public age: number,
//     public typeOfEmp: string,
//     public paymentPerHour: number
//   ) {}
//   public abstract calculateSal(): number;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CollegeFaculty = /** @class */ (function () {
    function CollegeFaculty(facultyName, age, typeOfEmp, paymentPerHour, hoursOfWork) {
        this.facultyName = facultyName;
        this.age = age;
        this.typeOfEmp = typeOfEmp;
        this.paymentPerHour = paymentPerHour;
        this.hoursOfWork = hoursOfWork;
    }
    CollegeFaculty.prototype.calculateSal = function () {
        if (this.typeOfEmp == "Contract") {
            console.log("".concat(this.facultyName, " is contract basis & income is \"INR ").concat((this.paymentPerHour * this.hoursOfWork) * 25, "\" "));
        }
        else if (this.typeOfEmp == "Permanent") {
            console.log("".concat(this.facultyName, " is permanent so, monthly income is \"INR ").concat(this.paymentPerHour * 8 * 30, "\""));
        }
        else {
            console.log("Please provide faculty type Contract or Permanent basis you have provided \"".concat(this.typeOfEmp, "\""));
        }
    };
    CollegeFaculty.prototype.getDetails = function () {
        console.log("Dear ".concat(this.facultyName, ",\n  your age is ").concat(this.age, " and faculty employment type is ").concat(this.typeOfEmp));
    };
    ;
    return CollegeFaculty;
}());
var facultyCompDept = /** @class */ (function (_super) {
    __extends(facultyCompDept, _super);
    function facultyCompDept(facultyName, age, typeOfEmp, paymentPerHour, facultyDept, hoursOfWork) {
        var _this = _super.call(this, facultyName, age, typeOfEmp, paymentPerHour, hoursOfWork) || this;
        _this.facultyName = facultyName;
        _this.age = age;
        _this.typeOfEmp = typeOfEmp;
        _this.paymentPerHour = paymentPerHour;
        _this.facultyDept = facultyDept;
        _this.hoursOfWork = hoursOfWork;
        return _this;
    }
    facultyCompDept.prototype.facultyDeptTotalFaculty = function () {
        return "Computer department has total 12 faculties";
    };
    return facultyCompDept;
}(CollegeFaculty));
var facultyElectronicDept = /** @class */ (function (_super) {
    __extends(facultyElectronicDept, _super);
    function facultyElectronicDept(facultyName, age, typeOfEmp, paymentPerHour, facultyDept, hoursOfWork) {
        var _this = _super.call(this, facultyName, age, typeOfEmp, paymentPerHour, hoursOfWork) || this;
        _this.facultyName = facultyName;
        _this.age = age;
        _this.typeOfEmp = typeOfEmp;
        _this.paymentPerHour = paymentPerHour;
        _this.facultyDept = facultyDept;
        _this.hoursOfWork = hoursOfWork;
        return _this;
    }
    facultyElectronicDept.prototype.facultyDeptTotalFaculty = function () {
        return "E&TC department has total 7 faculties";
    };
    return facultyElectronicDept;
}(CollegeFaculty));
var objCompDept = new facultyCompDept("Hitesh", 26, "Permanent", 235, "Computer", 1);
var objCompDept1 = new facultyCompDept("Amit", 34, "Permanent", 250, "Computer", 1);
var objElectronicDept = new facultyElectronicDept("Kajal", 26, "Contract", 40, "Computer", 23);
var objElectronicDept1 = new facultyElectronicDept("Soham", 29, "Contract", 50, "Computer", 23);
objCompDept.getDetails();
objCompDept.calculateSal();
objCompDept1.getDetails();
objCompDept1.calculateSal();
console.log(objCompDept1.facultyDeptTotalFaculty());
console.log("");
console.log("------------------------------------------------------------------");
objElectronicDept.getDetails();
objElectronicDept.calculateSal();
objElectronicDept1.getDetails();
objElectronicDept1.calculateSal();
console.log(objElectronicDept1.facultyDeptTotalFaculty());
