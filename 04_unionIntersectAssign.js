console.log("------ 01. Union Type - Assigning datatype as string | number | string[]----------");
var emptyArray = [''];
function empDetails(empdata) {
    if (typeof empdata === "string") {
        console.log("String value = ".concat(empdata));
    }
    else if (typeof empdata === "number") {
        console.log("Number value = ".concat(empdata));
    }
    else {
        for (var _i = 0, empdata_1 = empdata; _i < empdata_1.length; _i++) {
            var iterator = empdata_1[_i];
            console.log("Array value = ".concat(empdata));
        }
    }
}
empDetails('Amit');
empDetails(9975769495);
empDetails(['Hey', 'Amit', 'Shinde']);
console.log("--------------- 02. Using class parameter properties --------------------------");
var EmpInfo = /** @class */ (function () {
    function EmpInfo(fName, lName, contact) {
        this.fName = fName;
        this.lName = lName;
        this.contact = contact;
    }
    return EmpInfo;
}());
var emp1 = new EmpInfo('Amit', 'Shinde', 9975769495);
var emp2 = new EmpInfo('Sachin', 'Tendulkar', 8888603488);
console.log("Emlpoyee Information : ".concat(emp1.fName, " ").concat(emp1.lName, " ").concat(emp1.contact));
console.log(emp2);
console.log("--------------- 03. Intersection Type --------------------------");
var employeeDetails = {
    name: 'Amit',
    email: 'akshinde15@gmail.com',
    phone: 9975769495
};
function studInfo(details) {
    console.log("Dear ".concat(details.name, ".\n    I hope you have received our offer letter at ").concat(details.email, ".\n    We will call you at ").concat(details.phone, " shortly ,"));
}
studInfo(employeeDetails);
console.log("--------------- 04. Optional parameters --------------------------");
function empSalary(empId, empName, empCompany) {
    console.log("Employee ID : ".concat(empId));
    console.log("Employee Name : ".concat(empName));
    if (empCompany != undefined) {
        console.log("Employee Company : ".concat(empCompany));
    }
}
empSalary(11, 'Sagar Shingan', 'TCS');
console.log("--------------------------------------------------------------------");
empSalary(22, 'Rohit Shewale');
