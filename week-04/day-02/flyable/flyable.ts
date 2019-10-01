'use strict';

export interface Flyable{
    land(): void;
    fly(): void;
    takeOff(): void;
}

export abstract class Vehicle {
    protected _name: string;
    protected _size: string;
    protected _range: number;

    constructor(name?: string, size?: string, range?: number) {
        this._name = name;
        this._size = size;
        this._range = range;
    }  
}

export class Helicopter extends Vehicle implements Flyable {
    
    public land(): void{
        console.log("Prepare for landing.");
    }

    public fly(): void{
        console.log("The helicopter is flying.");
    }

    public takeOff(): void{
        console.log("Cleared for take off!");
    }
}

const helicopter = new Helicopter('Helicopter');

console.log(`${helicopter.land()}`);
console.log(`${helicopter.fly()}`);
console.log(`${helicopter.takeOff()}`);