'use strict';

import { Flowers } from "./flowers";
import { Trees } from "./trees";

export class Plants {
    protected _waterlevel: number;
    protected _color: string;
    protected _watering: number;
    protected _flowers: Flowers[];
    protected _trees: Trees[];

    public addFlower(addFlower: Flowers) {
        this._flowers.push(addFlower);
    }

    public addTree(addTree: Trees) {
        this._trees.push(addTree);
    }

    protected specificDescription(): string {
        return "";
    }

    public description(): void {
        console.log("The garden has a " + this._color + ' plant with the water level of ' + this.specificWL() + this.specificDescription());
    }

    protected specificWL(): number {
        return;
    }

    public getWL(): void {
        console.log("The water level is: " + this.specificWL());
    }

    // public info()

    constructor(waterlevel: number, color: string, watering: number) {
        this._waterlevel = waterlevel;
        this._color = color;
        this._watering = watering;
        this._flowers = [];
        this._trees = [];
    }
}