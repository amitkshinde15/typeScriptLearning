var sn: string | number;
sn = 'codemind';
sn = 100;

type test = 
string | string[];

//function formatCommandLine(input: string | string[]) {
    function formatCommandLine(input: test) {
    let line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map(x => x.trim()).join(' ');
          }
    return line;
}
console.log(formatCommandLine('hello ')); // hello
console.log(formatCommandLine(['hello ', 'world '])); // helloword
//console.log(formatCommandLine(123457));

class Person1 {
    //public fname: string;
    //public age: number;
    
    constructor(public fname: string, public age: number) // parameterised constructor 
    {
      //  this.fname = fname;
      //  this.age = age;
    }
}
const jack = new Person1('Jack', 30);
const adam = new Person1('Adam', 25);
console.log(jack.fname, jack.age);
console.log(adam.fname, adam.age);

