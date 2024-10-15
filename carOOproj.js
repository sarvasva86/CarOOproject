/** Type of vehicle */

class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    honk() {
      return "Beep.";
    }
  
    toString() {
      return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
  }
  
  /** Cars are a type of vehicle with 4 wheels. */
  
  class Car extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 4;
    }
  }
  
  /** Cars are a type of vehicle with 2 wheels. */
  
  class Motorcycle extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 2;
    }
  
    revEngine() {
      return "VROOM!!!";
    }
  }
  
  class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
  }



let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
console.log(myFirstVehicle.honk());       // Output: "Beep."
console.log(myFirstVehicle.toString());   // Output: "The vehicle is a Honda Monster Truck from 1999."

let myFirstCar = new Car("Toyota", "Corolla", 2005);
console.log(myFirstCar.toString());       // Output: "The vehicle is a Toyota Corolla from 2005."
console.log(myFirstCar.honk());           // Output: "Beep."
console.log(myFirstCar.numWheels);        // Output: 4

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
console.log(myFirstMotorcycle.toString());    // Output: "The vehicle is a Honda Nighthawk from 2000."
console.log(myFirstMotorcycle.honk());        // Output: "Beep."
console.log(myFirstMotorcycle.revEngine());   // Output: "VROOM!!!"
console.log(myFirstMotorcycle.numWheels);     // Output: 2

let garage = new Garage(2);
console.log(garage.vehicles); // Output: []

console.log(garage.add(new Car("Hyundai", "Elantra", 2015))); // Output: "Vehicle added!"
console.log(garage.vehicles); // Output: [Car]

console.log(garage.add("Taco")); // Output: "Only vehicles are allowed in here!"

console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2000))); // Output: "Vehicle added!"
console.log(garage.vehicles); // Output: [Car, Motorcycle]

console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2001))); // Output: "Sorry, we're full."