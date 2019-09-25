'use strict';

// start with making classes

class Car{
    public fuelLevel: number;
    capacity: number;
}
// difference btw class and instance -> class is like layout/skeleton
let audi = new Car(); // this is an instance of the Car class. -> we are instantiating our Car class

let opel = new Car(); // an other instance of the same Car class

for (let i: number = 0; i < 10; ++i) {
    let car = new Car();
    if (i == 5){
        opel = car;
    }
}
