var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.display = function () {
        throw new Error("Method not implemented.");
    };
    return Product;
}());
var EXCEL = /** @class */ (function () {
    function EXCEL() {
    }
    EXCEL.prototype.print = function () {
        console.log('EXCEL');
    };
    return EXCEL;
}());
var DOC = /** @class */ (function () {
    function DOC() {
    }
    DOC.prototype.print = function () {
        console.log("DOC");
    };
    return DOC;
}());
var PDF = /** @class */ (function () {
    function PDF() {
    }
    PDF.prototype.print = function () {
        console.log("PDF");
    };
    return PDF;
}());
var objEXCEL = new EXCEL();
objEXCEL.print();
