'use strict';

import { Flyable } from "../flyable/flyable";

export abstract class Animal{
    protected _name: string;
    protected _age: number;
    protected _gender: string;
    protected _transport: string;

    constructor(name?: string, age?: number, gender?: string, transport?: string){
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._transport = transport;
    }

    public getName(): string{
        return "";
    }

    public breed(): string{
        return "";
    }

    public eat(): string{
        return "";
    }
}

export class Mammal extends Animal{
    public constructor(name: string = 'mammal', age?: number, gender?: string, transport?: string){
    super (name, age, gender, transport);
    }
    
    getName(): string {
        return this._name;
    };

    breed(): string{
        return "pushing miniature versions out. "
    }
}

export class Reptile extends Animal{
    public constructor(name: string = 'reptile', age?: number, gender?: string, transport?: string){
    super (name, age, gender, transport);
    }

    getName(): string {
        return this._name;
    };

    breed(): string{
        return "laying eggs."
    }

}

export class Bird extends Animal implements Flyable{
    public constructor(name: string = 'bird', age?: number, gender?: string, transport?: string){
    super (name, age, gender, transport);
    }

    getName(): string {
        return this._name;
    };

    breed(): string{
        return "laying eggs."
    }

    public land(): void{
        console.log("The bird is landing.");
    }

    public fly(): void{
        console.log("The bird is flying.");
    }

    public takeOff(): void{
        console.log("The bird takes off.");
    }
}


// OUTPUT

// How do you breed?
// A Crocodile is breeding by laying eggs.
// A Koala is breeding by pushing miniature versions out.
// A Parrot is breeding by laying eggs.

const reptile = new Reptile('Crocodile');
const mammal = new Mammal('Koala');
const bird = new Bird('Parrot');

console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);

console.log("\n");
console.log(`${bird.land()}`);
console.log(`${bird.fly()}`);
console.log(`${bird.takeOff()}`);