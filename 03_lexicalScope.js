var Person = /** @class */ (function () {
    function Person(age) {
        var _this = this;
        this.growOld = function () {
            _this._age++;
        };
        this._age = age;
    }
    Person.prototype.age = function () {
        return this._age;
    };
    return Person;
}());
var objPerson = new Person(0); // object
//objPerson.growOld();
var growOldss = objPerson.growOld;
growOldss();
console.log('age', objPerson.age());
