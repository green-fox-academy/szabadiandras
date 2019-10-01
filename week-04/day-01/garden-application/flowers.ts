'use strict';

// WL = water level

import { Plants } from "./plants"

export class Flowers extends Plants { 
    
    public watering(waterIntake: number) {
        this._watering += waterIntake * 0,75;
    }
    
    protected specificWL(): any {
        console.log("The water level is: " + this.specificWL());
    }

    constructor(waterlevel?: number, color?: string, absorvation?: number) {
        super (waterlevel, color, absorvation);
        this._waterlevel = 0;
    }
}