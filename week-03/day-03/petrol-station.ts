'use strict';

class Car {
    private _gasAmount: number;
    private _capacity: number;

    constructor(gasAmount: number, capacity: number){
        this._gasAmount = 0;
        this._capacity = 100;
    }
    
    public refill(_gasAmount: number): void{
            this._gasAmount += _gasAmount;
    }
}

class Station {
    private _gasAmount: number;

    constructor(gasAmount: number){
        this._gasAmount = 1000;
    }
}