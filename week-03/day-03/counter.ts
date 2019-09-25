'use strict';

class Counter {
    integer: number;
    starter: number = 0;
    

    constructor(integer?: number) {
        this.integer = integer;

        if (this.integer) {
            this.integer += integer;
        } else {
            this.integer = 0;
        }

        this.starter = this.integer;
    }

    addPlus(plusNumber: number) {
        this.integer += plusNumber;
    }

    add(number:number) {
        if (number) {
            this.integer += number;
        } else {
            this.integer++;
        }
    }

    getClock() {
        console.log(this.integer);
    }

    reset() {
        this.integer = this.starter;
    }
}

let clock = new Counter(10);
clock.addPlus(25);
clock.getClock();