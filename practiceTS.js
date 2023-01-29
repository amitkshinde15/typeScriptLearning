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
var College = /** @class */ (function () {
    function College(facultyName, age, typeOfEmp, paymentPerHour) {
        this.facultyName = facultyName;
        this.age = age;
        this.typeOfEmp = typeOfEmp;
        this.paymentPerHour = paymentPerHour;
    }
    return College;
}());
var facultyCompDept = /** @class */ (function (_super) {
    __extends(facultyCompDept, _super);
    function facultyCompDept(facultyName, age, typeOfEmp, paymentPerHour, facultyDept, hoursOfWork) {
        var _this = _super.call(this, facultyName, age, typeOfEmp, paymentPerHour) || this;
        _this.facultyName = facultyName;
        _this.age = age;
        _this.typeOfEmp = typeOfEmp;
        _this.paymentPerHour = paymentPerHour;
        _this.facultyDept = facultyDept;
        _this.hoursOfWork = hoursOfWork;
        return _this;
    }
    facultyCompDept.prototype.calculateSal = function () {
        console.log(this.facultyName, this.age, this.typeOfEmp, this.paymentPerHour, result);
        var result;
        if (this.typeOfEmp == "Contract") {
            result = this.paymentPerHour * this.hoursOfWork;
        }
        else if (this.typeOfEmp == "Permanent") {
            result = this.paymentPerHour * 8;
        }
        else {
            if (this.typeOfEmp !== undefined) {
                result = 0;
            }
        }
        return result;
    };
    return facultyCompDept;
}(College));
var facultyElectronicDept = /** @class */ (function (_super) {
    __extends(facultyElectronicDept, _super);
    function facultyElectronicDept(facultyName, age, typeOfEmp, paymentPerHour, facultyDept, hoursOfWork) {
        var _this = _super.call(this, facultyName, age, typeOfEmp, paymentPerHour) || this;
        _this.facultyName = facultyName;
        _this.age = age;
        _this.typeOfEmp = typeOfEmp;
        _this.paymentPerHour = paymentPerHour;
        _this.facultyDept = facultyDept;
        _this.hoursOfWork = hoursOfWork;
        return _this;
    }
    facultyElectronicDept.prototype.calculateSal = function () {
        return this.paymentPerHour * this.hoursOfWork;
    };
    return facultyElectronicDept;
}(College));
var facultyComp = new facultyCompDept("Computer", 29, "Contract", 125, "Comp Department", 12);
var facultyEle = new facultyElectronicDept("Electronics", 32, "Contract", 200, "Ele Department", 8);
console.log(facultyComp.calculateSal());
console.log(facultyEle.calculateSal());
// let x = facultyComp.calculateSal();
// console.log(x);
