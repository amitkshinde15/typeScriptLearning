abstract class Calculation{
    constructor(public a: number , public b : number){

    }
    abstract add(): number;
    abstract sub(): number;
}

class AddMult extends Calculation{
    constructor(a:number, b: number, public c: number){
        super(a, b)
    }
    add(): number {
        let d = this.a+this.b;
        return d;
    
    }
   sub(): number {
        let d = this.a-this.b;
        return Math.abs(d);
        
    }
    mult():void{
        let d = this.a*this.b*this.c;
         console.log(d);
       

    }

}
let objcalcuation = new AddMult(15.5, 25, 11);

console.log(objcalcuation.add());
console.log(objcalcuation.sub());
objcalcuation.mult();



