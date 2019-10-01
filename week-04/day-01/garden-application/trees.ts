'use strict';

// WL = water level

import { Plants } from "./plants"

export class Trees extends Plants { 
    
    constructor(waterlevel?: number, color?: string, absorvation?: number) {
        super (waterlevel, color, absorvation);
        this._waterlevel = 0;
    }

    public watering(waterIntake: number) {
        this._watering += waterIntake * 0,40;

        if (this._watering >= 10) {
            console.log("The tree needs watering!");
        } else {
            console.log("The tree doesn't need watering.")
        }
    }
    
    public specificWL(): any {
        console.log("The water level is: " + this.specificWL());
    }

}