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
var Calculation = /** @class */ (function () {
    function Calculation(a, b) {
        this.a = a;
        this.b = b;
    }
    return Calculation;
}());
var AddMult = /** @class */ (function (_super) {
    __extends(AddMult, _super);
    function AddMult(a, b, c) {
        var _this = _super.call(this, a, b) || this;
        _this.c = c;
        return _this;
    }
    AddMult.prototype.add = function () {
        var d = this.a + this.b;
        return d;
    };
    AddMult.prototype.sub = function () {
        var d = this.a - this.b;
        return Math.abs(d);
    };
    AddMult.prototype.mult = function () {
        var d = this.a * this.b * this.c;
        console.log(d);
    };
    return AddMult;
}(Calculation));
var objcalcuation = new AddMult(15.5, 25, 11);
console.log(objcalcuation.add());
console.log(objcalcuation.sub());
objcalcuation.mult();
