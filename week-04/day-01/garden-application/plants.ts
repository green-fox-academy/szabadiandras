'use strict';

import { Flowers } from "./flowers";
import { Trees } from "./trees";

export class Plants {
    protected _waterlevel: number;
    protected _color: string;
    protected _watering: number;
    protected _flowers: Flowers[];
    protected _trees: Trees[];

    // forEach
    
    constructor(waterlevel: number, color: string, watering: number) {
        this._waterlevel = waterlevel;
        this._color = color;
        this._watering = watering;
        this._flowers = [];
        this._trees = [];
    }

    public addFlower(addFlower: Flowers) {
        this._flowers.push(addFlower);
    }

    public addTree(addTree: Trees) {
        this._trees.push(addTree);
    }

    public specificDescription(): string {
        return "";
    }

    public description(): void {
        console.log("The garden has " + (Flowers.length + Trees.length) + ' plants with the water level of ' + this.specificWL() + this.specificDescription());
    }

    public specificWL(): number {
        return;
    }

    public getWL(): void {
        console.log("The water level is: " + this.specificWL());
    }

    // public info()

}