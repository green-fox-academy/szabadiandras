'use strict';

    class Plants {
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

}'use strict';

// WL = water level

    class Trees { 
    
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

'use strict';

// WL = water level

    class Flowers { 
    
    constructor(waterlevel?: number, color?: string, absorvation?: number) {
        super (waterlevel, color, absorvation);
        this._waterlevel = 0;
    }

    public watering(waterIntake: number) {
        this._watering += waterIntake * 0,75;

        if (this._watering >= 10) {
            console.log("The water needs watering!");
        } else {
            console.log("The water doesn't need watering.")
        }
    }
    
    public specificWL(): any {
        console.log("The water level is: " + this.specificWL());
    }

}

