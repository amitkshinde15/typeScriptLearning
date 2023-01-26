abstract class Car {
    Wheel(): string {
        return '4 wheeler';
    }

    CheckAC(): string {
        return 'Ac is available';
    }

    CallFacility() : string {
        return "Call facility supported"
    }

    abstract Price(): number;
    abstract getTotalSeats(): number;
    abstract Color(): string;
}

class Hundyai extends Car {
    Price(): number {
        return 900000;
    }
    getTotalSeats(): number {
        return 7;
    }
    Color(): string {
        return 'gray';
    }


}

let hundai = new Hundyai();

console.log(hundai.CallFacility());
console.log(`Price of hundai car ${hundai.Price()}`);


class Toyota extends Car {
    Price(): number {
       return 1000000;
    }
    getTotalSeats(): number {
       return 5;
    }
    Color(): string {
        return 'white';
    }

   
}
let toyota = new Toyota();

console.log(toyota.CallFacility());

class Tata extends Car {
    Price(): number {
        return 11000000;
     }
     getTotalSeats(): number {
        return 7;
     }
     Color(): string {
        return 'White';
    }
}
let objtata = new Tata();
console.log(`Color of Tata car ${objtata.Color()}`);



// 

// Price -- both have price but diff price .. 
// Total seats -- both have total seats but diff seats 
// colors-- both car are the diff colors .

// we can solve this problem by using abstract class ..

// 

// we can not create a instace or object of abstract class .

//let objCar = new Car(); --We can not create object of abstract class