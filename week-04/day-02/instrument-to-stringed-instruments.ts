'use strict';

// INSTRUMENT

export class Instrument {
    protected _name: string;

    constructor(name: string){
        this._name = name;
    }

    protected sPlay(): string{
        return "";
    }
    
    public play(): void{
        console.log(this._name + ", a " + this.sPlay());
    }
}

// STRINGEDINSTRUMENT

export class StringedInstrument extends Instrument {
    protected _numberOfStrings: number;

    constructor(numberOfStrings?: number, name?: string) {
        super (name);
        this._numberOfStrings = numberOfStrings;
    }

    protected sPlay(): string {
        return this._numberOfStrings + "-stringed instrument, " + this.sound();
    }

    protected sound(): string {
        return "that goes: "
    };

}

// ELECTRICGUITAR

export class ElectricGuitar extends StringedInstrument {

    constructor(numberOfStrings: number = 6, name: string = 'Electric Guitar') {
        super (numberOfStrings, name);
    }

    public sPlay(): string{
        return + this._numberOfStrings + "-stringed instrument, " + this.sound() + this.sSound();
    }
    
    public sSound(): string{
        return "Twang"
    }
}

// BASSGUITAR

export class BassGuitar extends StringedInstrument {

    constructor(numberOfStrings: number = 4, name: string = 'Bass Guitar') {
        super (numberOfStrings, name);
    }

    public sPlay(): string{
        return + this._numberOfStrings + "-stringed instrument, " + this.sound() + this.sSound();
    }

    public sSound(): string{
        return "Duum-duum-duum"
    }
}

// VIOLIN
    
export class Violin extends StringedInstrument {

    constructor(numberOfStrings: number = 4, name: string = 'Violin') {
        super (numberOfStrings, name);
    }

        public sPlay(): string{
        return + this._numberOfStrings + "-stringed instrument, " + this.sound() + this.sSound();
    }

    public sSound(): string{
        return "Screech"
    }
}





/*
public play {
    play(): void;
}

abstract class StringedInstrument extends Instrument implements play {
    protected _numberOfStrings: number;

    constructor (sound: string, play: string) {}
        play();
    
    protected sound(): void {}

    // with the help of the sound() the play() method is fully implementable
    // public play(): void{}
}
*/