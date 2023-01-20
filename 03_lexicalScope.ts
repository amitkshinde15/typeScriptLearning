class Person {
    private _age: number;
    constructor(age: number) {
        this._age = age;
    }
    growOld = () => {
         this._age ++;
    }
    age() {
        return this._age;
    }}
    const objPerson = new Person(0); // object
    //objPerson.growOld();
    const growOldss = objPerson.growOld;
    growOldss();
    console.log('age', objPerson.age());
    
    