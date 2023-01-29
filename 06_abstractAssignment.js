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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.wheel = function () {
        return "4 Wheeler";
    };
    Car.prototype.checkAc = function () {
        return "Ac is availbel";
    };
    Car.prototype.callFacility = function () {
        return "Call facility supported";
    };
    return Car;
}());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toyota.prototype.Price = function () {
        return 1000000;
    };
    Toyota.prototype.getTotalSeats = function () {
        return 5;
    };
    Toyota.prototype.Color = function () {
        return "white";
    };
    Toyota.prototype.gps = function () {
        return false;
    };
    return Toyota;
}(Car));
var Hundyai = /** @class */ (function (_super) {
    __extends(Hundyai, _super);
    function Hundyai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hundyai.prototype.Price = function () {
        return 900000;
    };
    Hundyai.prototype.getTotalSeats = function () {
        return 7;
    };
    Hundyai.prototype.Color = function () {
        return "gray";
    };
    Hundyai.prototype.gps = function () {
        return true;
    };
    return Hundyai;
}(Car));
var objToyota = new Toyota();
var objHundyai = new Hundyai();
console.log("Is Toyota Car supports GPS? => \"".concat(objToyota.gps(), "\""));
console.log("Is Hundyai Car supports GPS? => \"".concat(objHundyai.gps(), "\""));
