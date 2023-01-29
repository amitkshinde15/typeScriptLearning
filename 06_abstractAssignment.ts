abstract class Car {
  wheel(): string {
    return "4 Wheeler";
  }
  checkAc(): string {
    return "Ac is availbel";
  }
  callFacility(): string {
    return "Call facility supported";
  }
  abstract Price(): number;
  abstract getTotalSeats(): number;
  abstract Color(): string;
  abstract gps(): boolean;
}
class Toyota extends Car {
  Price(): number {
    return 1000000;
  }
  getTotalSeats(): number {
    return 5;
  }
  Color(): string {
    return "white";
  }
  gps(): boolean {
    return false;
  }
}
class Hundyai extends Car {
  Price(): number {
    return 900000;
  }
  getTotalSeats(): number {
    return 7;
  }
  Color(): string {
    return "gray";
  }
  gps(): boolean {
    return true;
  }
}

let objToyota = new Toyota();
let objHundyai = new Hundyai();
console.log(`Is Toyota Car supports GPS? => "${objToyota.gps()}"`);
console.log(`Is Hundyai Car supports GPS? => "${objHundyai.gps()}"`);
