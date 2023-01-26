var sn;
sn = 'codemind';
sn = 100;
//function formatCommandLine(input: string | string[]) {
function formatCommandLine(input) {
    var line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map(function (x) { return x.trim().join(' '); });
    }
    return line;
}
console.log(formatCommandLine('hello ')); // hello
console.log(formatCommandLine(['hello ', 'world '])); // helloword
//console.log(formatCommandLine(123457));
var Person1 = /** @class */ (function () {
    //public fname: string;
    //public age: number;
    function Person1(fname, age) {
        this.fname = fname;
        this.age = age;
        //  this.fname = fname;
        //  this.age = age;
    }
    return Person1;
}());
var jack = new Person1('Jack', 30);
var adam = new Person1('Adam', 25);
console.log(jack.fname, jack.age);
console.log(adam.fname, adam.age);
